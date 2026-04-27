import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants/data";
import api from "../api/api";

/**
 * useTestimonialsData()
 * 
 * Returns:
 *   testimonials – array of testimonial objects
 *   loading      – true while the first fetch is in-flight
 *   source       – "backend" | "fallback"
 *
 * Behaviour:
 *   1. Immediately serves fallback data.js values (no flash of empty content).
 *   2. Fires GET /api/testimonials in the background.
 *   3. On success replaces with API data.
 *   4. On any error (network down, non-2xx, empty list) keeps fallback values.
 */
export function useTestimonialsData() {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("fallback");

  useEffect(() => {
    let cancelled = false;

    api
      .get("/testimonials")
      .then((res) => {
        if (cancelled) return;
        const data = res.data?.data;
        if (Array.isArray(data) && data.length > 0) {
          // Convert API format to component format
          const normalizedTestimonials = data.map(t => ({
            name: t.name,
            role: t.role,
            quote: t.quote,
            initial: t.initial || t.name[0],
          }));
          console.log("✅ API TESTIMONIALS DATA:", normalizedTestimonials);
          setTestimonials(normalizedTestimonials);
          setSource("backend");
        }
        // Empty array → keep fallback silently
      })
      .catch((err) => {
        // Network error / 4xx / 5xx → keep fallback silently
        console.log("ℹ️ Testimonials: Using fallback data (API error):", err?.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { testimonials, loading, source };
}
