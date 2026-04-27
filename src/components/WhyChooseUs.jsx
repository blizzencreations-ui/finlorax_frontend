import { useState, useEffect } from "react";
import { WHY_FEATURES, WHY_STATS } from "../constants/data";
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

function FeatureItem({ icon, title, desc, isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        gap: isMobile ? "16px" : "20px",
        alignItems: "flex-start"
      }}
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
    >
      <div style={{
        width: isMobile ? "44px" : "52px",
        height: isMobile ? "44px" : "52px",
        borderRadius: "14px", flexShrink: 0,
        background: hov ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.1)",
        border: `1px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: isMobile ? "1.1rem" : "1.4rem",
        transform: hov ? "scale(1.1) rotate(-3deg)" : "scale(1) rotate(0)",
        transition: "transform 0.3s, background 0.3s, border 0.3s",
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 700,
          color: "#0b1e3d", marginBottom: "6px",
        }}>
          {title}
        </h4>
        <p style={{ fontSize: isMobile ? "0.8rem" : "0.87rem", color: "#6b7a90", lineHeight: "1.75" }}>{desc}</p>
      </div>
    </div>
  );
}

function StatRow({ num, label, isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
      style={{
        background: hov ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px", padding: isMobile ? "16px 20px" : "22px 24px",
        transition: "background 0.3s, border 0.3s, transform 0.3s",
        transform: hov ? "translateX(6px)" : "translateX(0)",
        cursor: "default",
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 900,
        background: "linear-gradient(135deg, #c9a84c, #f0d080)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        {num}
      </div>
      <div style={{ fontSize: isMobile ? "0.75rem" : "0.85rem", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>{label}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  const isMobile = useIsMobile();
  
  return (
    <section style={{ padding: isMobile ? "70px 5%" : "110px 5%", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "50px" : "80px",
          alignItems: "center"
        }}>

          {/* ── Features list ── */}
          <div className="reveal">
            <SectionLabel label="Why Choose Us" />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "clamp(1.5rem, 5vw, 2rem)" : "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700, color: "#0b1e3d",
              lineHeight: 1.2, marginBottom: isMobile ? "30px" : "40px",
            }}>
              We deliver expertise<br />
              <span style={{
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                you can trust
              </span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "18px" : "24px" }}>
              {WHY_FEATURES.map((f) => (
                <FeatureItem key={f.title} {...f} isMobile={isMobile} />
              ))}
            </div>
          </div>

          {/* ── Stats panel ── */}
          <div className="reveal" style={{
            background: "linear-gradient(135deg, #0b1e3d, #1a3a6e)",
            borderRadius: "24px", padding: isMobile ? "32px 24px" : "48px 36px",
            boxShadow: "0 30px 80px rgba(11,30,61,0.35)",
            display: "flex", flexDirection: "column", gap: isMobile ? "14px" : "20px",
          }}>
            {WHY_STATS.map(([num, label]) => (
              <StatRow key={label} num={num} label={label} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
