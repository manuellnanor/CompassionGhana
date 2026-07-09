"use client";

import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "compassion_ghana_cookie_consent";
const CONSENT_COOKIE_NAME = "compassion_ghana_cookie_consent";
const CONSENT_POLICY_VERSION = "2026-07";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type ConsentPreference = {
  preference: "accepted" | "rejected" | "customized";
  analytics: boolean;
  marketing: boolean;
  version: string;
  savedAt: string;
};

const readConsentCookie = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`))
    ?.split("=")[1];
};

const hasCurrentConsent = () => {
  const storedPreference = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  const cookiePreference = readConsentCookie();
  const rawPreference = storedPreference || cookiePreference;

  if (!rawPreference) return false;

  try {
    const parsed = JSON.parse(decodeURIComponent(rawPreference)) as Partial<ConsentPreference>;
    return parsed.version === CONSENT_POLICY_VERSION && Boolean(parsed.preference);
  } catch {
    return false;
  }
};

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    setIsVisible(!hasCurrentConsent());
  }, []);

  const savePreference = (
    preference: ConsentPreference["preference"],
    analytics = false,
    marketing = false
  ) => {
    const consentValue = encodeURIComponent(
      JSON.stringify({
        preference,
        analytics,
        marketing,
        version: CONSENT_POLICY_VERSION,
        savedAt: new Date().toISOString(),
      } satisfies ConsentPreference)
    );

    window.localStorage.setItem(CONSENT_STORAGE_KEY, consentValue);
    document.cookie = `${CONSENT_COOKIE_NAME}=${consentValue}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Privacy Preference Center" className="ConsentBanner">
      <div className="ConsentBanner__container container mx-auto">
        <h2 className="ConsentBanner__title heading-sm">Privacy Preference Center</h2>
        <p className="ConsentBanner__description body-sm">
          By selecting "Accept Cookies," you consent to the use of cookies on your device, which improve site navigation,
          analyze usage patterns, and support our marketing initiatives.
        </p>

        {showSettings && (
          <div className="ConsentBanner__settings">
            <label className="ConsentBanner__setting">
              <input type="checkbox" checked disabled />
              <span>Required cookies</span>
            </label>
            <label className="ConsentBanner__setting">
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(event) => setAnalyticsEnabled(event.target.checked)}
              />
              <span>Analytics cookies</span>
            </label>
            <label className="ConsentBanner__setting">
              <input
                type="checkbox"
                checked={marketingEnabled}
                onChange={(event) => setMarketingEnabled(event.target.checked)}
              />
              <span>Marketing cookies</span>
            </label>
          </div>
        )}

        <div className="ConsentBanner__actions">
          <button
            type="button"
            onClick={() => savePreference("accepted", true, true)}
            className="ButtonStyle ButtonStyle--primary ButtonStyle--md gap-snug-xl flex justify-center items-center"
          >
            Accept Cookies
          </button>
          <button
            type="button"
            onClick={() => savePreference("rejected")}
            className="ButtonStyle ButtonStyle--secondary ButtonStyle--md gap-snug-xl flex justify-center items-center"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={() => {
              if (showSettings) {
                savePreference("customized", analyticsEnabled, marketingEnabled);
                return;
              }
              setShowSettings(true);
            }}
            className="ButtonStyle ButtonStyle--tertiary ButtonStyle--md gap-snug-xl flex justify-center items-center"
          >
            {showSettings ? "Save Settings" : "Cookie Settings"}
          </button>
          <a
            href="https://www.compassion.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="ConsentBanner__policyLink label-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
