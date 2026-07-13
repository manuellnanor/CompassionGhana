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
  functional: boolean;
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
  const [isPreferenceDrawer, setIsPreferenceDrawer] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [functionalEnabled, setFunctionalEnabled] = useState(false);

  useEffect(() => {
    setIsVisible(!hasCurrentConsent());

    const openPreferences = () => {
      setShowSettings(true);
      setIsPreferenceDrawer(true);
      setIsVisible(true);
    };

    window.addEventListener("open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("open-cookie-preferences", openPreferences);
  }, []);

  const savePreference = (
    preference: ConsentPreference["preference"],
    analytics = false,
    marketing = false,
    functional = false
  ) => {
    const consentValue = encodeURIComponent(
      JSON.stringify({
        preference,
        analytics,
        marketing,
        functional,
        version: CONSENT_POLICY_VERSION,
        savedAt: new Date().toISOString(),
      } satisfies ConsentPreference)
    );

    window.localStorage.setItem(CONSENT_STORAGE_KEY, consentValue);
    document.cookie = `${CONSENT_COOKIE_NAME}=${consentValue}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
    setIsVisible(false);
    setIsPreferenceDrawer(false);
  };

  if (!isVisible) return null;

  if (isPreferenceDrawer) {
    return (
      <div role="dialog" aria-modal="true" aria-label="Privacy Preference Center" className="ConsentBanner ConsentBanner--drawer">
        <button
          type="button"
          aria-label="Close privacy preference center"
          className="ConsentBanner__backdrop"
          onClick={() => {
            setIsVisible(false);
            setIsPreferenceDrawer(false);
          }}
        />

        <div className="ConsentBanner__container ConsentBanner__drawerPanel">
          <header className="ConsentBanner__drawerHeader">
            <img src="/assets/logo-compassion-white.svg" alt="Compassion" />
            <button
              type="button"
              aria-label="Close privacy preference center"
              onClick={() => {
                setIsVisible(false);
                setIsPreferenceDrawer(false);
              }}
            >
              ×
            </button>
          </header>

          <div className="ConsentBanner__drawerBody">
            <h2 className="ConsentBanner__title">Privacy Preference Center</h2>
            <p className="ConsentBanner__description">
              When you browse our website, it may use cookies to enhance your experience by storing information on your browser.
              These cookies do not directly identify you but help personalize your visit. You can manage your cookie preferences
              below. Blocking some cookies may affect your site experience and the services we offer.
            </p>
            <a href="/privacy-policy" className="ConsentBanner__policyLink">Privacy Policy</a>

            <h3 className="ConsentBanner__settingsTitle">Manage Consent Preferences</h3>
            <div className="ConsentBanner__drawerSettings">
              <div className="ConsentBanner__drawerSetting">
                <span className="ConsentBanner__settingName"><span aria-hidden="true">+</span> Strictly Necessary Cookies</span>
                <strong>Always Active</strong>
              </div>
              <label className="ConsentBanner__drawerSetting">
                <span className="ConsentBanner__settingName"><span aria-hidden="true">+</span> Performance Cookies</span>
                <input
                  className="ConsentBanner__toggle"
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                />
              </label>
              <label className="ConsentBanner__drawerSetting">
                <span className="ConsentBanner__settingName"><span aria-hidden="true">+</span> Targeting Cookies</span>
                <input
                  className="ConsentBanner__toggle"
                  type="checkbox"
                  checked={marketingEnabled}
                  onChange={(event) => setMarketingEnabled(event.target.checked)}
                />
              </label>
              <label className="ConsentBanner__drawerSetting">
                <span className="ConsentBanner__settingName"><span aria-hidden="true">+</span> Functional Cookies</span>
                <input
                  className="ConsentBanner__toggle"
                  type="checkbox"
                  checked={functionalEnabled}
                  onChange={(event) => setFunctionalEnabled(event.target.checked)}
                />
              </label>
            </div>
          </div>

          <footer className="ConsentBanner__drawerFooter">
            <button
              type="button"
              onClick={() => savePreference("customized", analyticsEnabled, marketingEnabled, functionalEnabled)}
              className="ConsentBanner__confirmButton"
            >
              Confirm My Choices
            </button>
          </footer>
        </div>
      </div>
    );
  }

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
            onClick={() => savePreference("accepted", true, true, true)}
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
            href="/privacy-policy"
            className="ConsentBanner__policyLink label-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
