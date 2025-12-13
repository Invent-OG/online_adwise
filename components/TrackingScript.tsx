"use client";

import { useEffect } from "react";

export default function TrackingScript() {
  useEffect(() => {
    (function () {
      function getParam(param: string) {
        if (typeof window === "undefined") return "";
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param) || "";
      }

      const data = {
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        utm_source: getParam("utm_source"),
        utm_medium: getParam("utm_medium"),
        utm_campaign: getParam("utm_campaign"),
        utm_content: getParam("utm_content"),
        utm_term: getParam("utm_term"),
        referrer: document.referrer,
      };

      // Replace 'YOUR_WEB_APP_URL' with your actual endpoint
      if (data.utm_source) {
        fetch("onlineadwise.com", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).catch((err) => console.error("Tracking error:", err));
      }
    })();
  }, []);

  return null;
}
