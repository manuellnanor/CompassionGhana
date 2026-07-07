"use client";

import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "compassion_ghana_cookie_consent_session";

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setIsVisible(!window.sessionStorage.getItem(CONSENT_STORAGE_KEY));
  }, []);

  const savePreference = (preference: "accepted" | "rejected") => {
    window.sessionStorage.setItem(CONSENT_STORAGE_KEY, preference);
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
              <input type="checkbox" />
              <span>Analytics cookies</span>
            </label>
            <label className="ConsentBanner__setting">
              <input type="checkbox" />
              <span>Marketing cookies</span>
            </label>
          </div>
        )}

        <div className="ConsentBanner__actions">
          <button
            type="button"
            onClick={() => savePreference("accepted")}
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
            onClick={() => setShowSettings((current) => !current)}
            className="ButtonStyle ButtonStyle--tertiary ButtonStyle--md gap-snug-xl flex justify-center items-center"
          >
            Cookie Settings
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
