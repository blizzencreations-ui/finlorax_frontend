import { useTestimonialsData } from "../hooks/useTestimonialsData";
import TestiCard from "./TestiCard";
import SectionLabel from "./SectionLabel";

export default function Testimonials() {
  const { testimonials, loading } = useTestimonialsData();

  if (loading) {
    return <section style={{ padding: "110px 5%", background: "#0b1e3d", minHeight: "400px" }}>Loading...</section>;
  }
  return (
    <section
      id="testimonials"
      style={{ padding: "110px 5%", background: "#0b1e3d", position: "relative", overflow: "hidden" }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header row */}
        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "60px" }}
        >
          <div>
            <SectionLabel label="Testimonials" />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#fff",
            }}>
              What our clients <span className="gold-text">say about us</span>
            </h2>
          </div>

          <a
            href="#quote"
            style={{
              border: "2px solid rgba(201,168,76,0.5)", color: "#c9a84c",
              padding: "12px 28px", borderRadius: "8px",
              fontWeight: 600, textDecoration: "none", fontSize: "0.9rem",
              transition: "background 0.2s, border-color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(201,168,76,0.1)"; e.target.style.borderColor = "#c9a84c"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
          >
            Get In Touch →
          </a>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {testimonials.map((t, i) => (
            <TestiCard key={t.name} {...t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
