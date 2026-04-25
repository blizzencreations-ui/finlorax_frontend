import { useState, useEffect } from "react";
import api from "../api/api";

const FALLBACK_TESTIMONIALS = [
  {
    name: "Raj Kumar",
    role: "Business Owner",
    quote: "Finlorax has been instrumental in optimizing our tax strategy. Their expertise saved us significant amount last year!",
    initial: "R",
  },
  {
    name: "Priya Singh",
    role: "Freelance Professional",
    quote: "Finally, someone who explains taxes in simple terms. Highly recommended for anyone seeking reliable tax advice.",
    initial: "P",
  },
  {
    name: "Amit Patel",
    role: "Startup Founder",
    quote: "Their GST compliance support has been flawless. Allows me to focus on growing my business without tax worries.",
    initial: "A",
  },
];

/**
 * useTestimonialsData()
 * Fetches testimonials from the API with fallback to hardcoded data
 * 
 * Returns:
 *   testimonials - array of testimonial objects
 *   loading      - true while fetching
 */
export function useTestimonialsData() {
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/testimonials")
      .then((res) => {
        const data = res.data?.data;
        if (Array.isArray(data) && data.length > 0) {
          // Convert API format to component format
          setTestimonials(
            data.map(t => ({
              name: t.name,
              role: t.role,
              quote: t.quote,
              initial: t.initial || t.name[0],
            }))
          );
        }
      })
      .catch(() => {
        // Fallback to hardcoded data silently
      })
      .finally(() => setLoading(false));
  }, []);

  return { testimonials, loading };
}
