import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initializeAnalytics, trackEvent, trackPageView } from "../../lib/analytics";

function percentScrolled() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (docHeight <= 0) {
    return 100;
  }

  return Math.round((scrollTop / docHeight) * 100);
}

export function AnalyticsManager() {
  const location = useLocation();
  const hasTracked50 = useRef(false);
  const hasTracked90 = useRef(false);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const path = location.pathname;
    trackPageView(path);

    if (path === "/oem") {
      trackEvent("visit_oem_page", { page: path });
    }

    if (path === "/plataforma") {
      trackEvent("visit_platform_page", { page: path });
    }

    if (path === "/casos-de-uso") {
      trackEvent("visit_use_cases_page", { page: path });
    }

    hasTracked50.current = false;
    hasTracked90.current = false;
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const progress = percentScrolled();

      if (!hasTracked50.current && progress >= 50) {
        hasTracked50.current = true;
        trackEvent("scroll_50", { progress });
      }

      if (!hasTracked90.current && progress >= 90) {
        hasTracked90.current = true;
        trackEvent("scroll_90", { progress });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}