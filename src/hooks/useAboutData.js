import { useState, useEffect } from "react";
import api from "../api/api";

const FALLBACK_ABOUT = {
  headline: "Minimize your tax and Maximize your savings",
  subheadline: "Since 2024, we've been helping individuals and businesses with reliable tax and compliance services.",
  description: "Since 2024, we've been helping individuals and businesses with reliable tax and compliance services.",
  experienceYears: 5,
  clientsCount: "200+",
  bullets: [
    "Expert guidance on Income Tax, GST & Compliance",
    "Transparent advice with timely filings",
    "Smart tax-saving strategies tailored for you",
    "End-to-end support for all business finances",
  ],
};

/**
 * useAboutData()
 * 
 * Returns:
 *   aboutData – object with headline, subheadline, description, experienceYears, clientsCount, bullets
 *   loading   – true while the first fetch is in-flight
 *   source    – "backend" | "fallback"
 *
 * Behaviour:
 *   1. Immediately serves fallback data.js values (no flash of empty content).
 *   2. Fires GET /api/about in the background.
 *   3. On success replaces with API data.
 *   4. On any error (network down, non-2xx, empty response) keeps fallback values.
 */
export function useAboutData() {
  const [aboutData, setAboutData] = useState(FALLBACK_ABOUT);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("fallback");

  useEffect(() => {
    let cancelled = false;

    api
      .get("/about")
      .then((res) => {
        if (cancelled) return;
        const data = res.data?.data;
        if (data) {
          const normalizedAbout = {
            headline: data.headline || FALLBACK_ABOUT.headline,
            subheadline: data.subheadline || FALLBACK_ABOUT.subheadline,
            description: data.description || FALLBACK_ABOUT.description,
            experienceYears: data.experienceYears || FALLBACK_ABOUT.experienceYears,
            clientsCount: data.clientsCount || FALLBACK_ABOUT.clientsCount,
            bullets: (data.bullets && data.bullets.length > 0)
              ? data.bullets.map(b => typeof b === "string" ? b : b.bullet)
              : FALLBACK_ABOUT.bullets,
          };
          console.log("✅ API ABOUT DATA:", normalizedAbout);
          setAboutData(normalizedAbout);
          setSource("backend");
        }
        // Empty response → keep fallback silently
      })
      .catch((err) => {
        // Network error / 4xx / 5xx → keep fallback silently
        console.log("ℹ️ About: Using fallback data (API error):", err?.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { aboutData, loading, source };
}
  
