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
 * Fetches about section from the API with fallback to hardcoded data
 * 
 * Returns:
 *   aboutData - object with headline, subheadline, description, experienceYears, clientsCount, bullets
 *   loading   - true while fetching
 */
export function useAboutData() {
  const [aboutData, setAboutData] = useState(FALLBACK_ABOUT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/about")
      .then((res) => {
        const data = res.data?.data;
        if (data) {
          setAboutData({
            headline: data.headline || FALLBACK_ABOUT.headline,
            subheadline: data.subheadline || FALLBACK_ABOUT.subheadline,
            description: data.description || FALLBACK_ABOUT.description,
            experienceYears: data.experienceYears || FALLBACK_ABOUT.experienceYears,
            clientsCount: data.clientsCount || FALLBACK_ABOUT.clientsCount,
            bullets: (data.bullets && data.bullets.length > 0) 
              ? data.bullets.map(b => typeof b === "string" ? b : b.bullet)
              : FALLBACK_ABOUT.bullets,
          });
        }
      })
      .catch(() => {
        // Fallback to hardcoded data silently
      })
      .finally(() => setLoading(false));
  }, []);

  return { aboutData, loading };
}
