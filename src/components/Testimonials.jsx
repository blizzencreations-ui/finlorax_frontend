import { useState, useEffect } from "react";
import { useTestimonialsData } from "../hooks/useTestimonialsData";
import TestiCard from "./TestiCard";
import SectionLabel from "./SectionLabel";

/* ── viewport hook ───────────────────────────────────────────────────────── */
function useIsMobile(bp = 768) {
  const [mobile, setMobile] = useState(window.innerWidth < bp);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return mobile;
}

export default function Testimonials() {
  const { testimonials, loading, source } = useTestimonialsData();
  const isMobile = useIsMobile();

  return (
    <section
      id="testimonials"
      style={{ padding: isMobile ? "70px 5%" : "110px 5%", background: "#0b1e3d", position: "relative", overflow: "hidden" }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
        backgroundSize: isMobile ? "30px 30px" : "50px 50px",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header row */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            flexWrap: "wrap",
            gap: isMobile ? "16px" : "20px",
            marginBottom: isMobile ? "40px" : "60px",
            flexDirection: isMobile ? "column" : "row"
          }}
        >
          <div>
            <SectionLabel label="Testimonials" />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "clamp(1.5rem, 6vw, 2rem)" : "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#fff",
            }}>
              What our clients <span className="gold-text">say about us</span>
            </h2>
          </div>

          <a
            href="#quote"
            style={{
              border: "2px solid rgba(201,168,76,0.5)", color: "#c9a84c",
              padding: isMobile ? "12px 20px" : "12px 28px", borderRadius: "8px",
              fontWeight: 600, textDecoration: "none", fontSize: isMobile ? "0.85rem" : "0.9rem",
              transition: "background 0.2s, border-color 0.2s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(201,168,76,0.1)"; e.target.style.borderColor = "#c9a84c"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
          >
            Get In Touch →
          </a>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? (window.innerWidth < 480 ? "1fr" : "1fr 1fr") : "repeat(3, 1fr)",
          gap: isMobile ? "16px" : "22px"
        }}>
          {testimonials.map((t, i) => (
            <TestiCard key={t.name} {...t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
