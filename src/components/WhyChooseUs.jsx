import { useState } from "react";
import { WHY_FEATURES, WHY_STATS } from "../constants/data";
import SectionLabel from "./SectionLabel";

function FeatureItem({ icon, title, desc }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
        background: hov ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.1)",
        border: `1px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem",
        transform: hov ? "scale(1.1) rotate(-3deg)" : "scale(1) rotate(0)",
        transition: "transform 0.3s, background 0.3s, border 0.3s",
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.1rem", fontWeight: 700,
          color: "#0b1e3d", marginBottom: "6px",
        }}>
          {title}
        </h4>
        <p style={{ fontSize: "0.87rem", color: "#6b7a90", lineHeight: "1.75" }}>{desc}</p>
      </div>
    </div>
  );
}

function StatRow({ num, label }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px", padding: "22px 24px",
        transition: "background 0.3s, border 0.3s, transform 0.3s",
        transform: hov ? "translateX(6px)" : "translateX(0)",
        cursor: "default",
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2rem", fontWeight: 900,
        background: "linear-gradient(135deg, #c9a84c, #f0d080)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        {num}
      </div>
      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>{label}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "110px 5%", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* ── Features list ── */}
          <div className="reveal">
            <SectionLabel label="Why Choose Us" />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700, color: "#0b1e3d",
              lineHeight: 1.2, marginBottom: "40px",
            }}>
              We deliver expertise<br />
              <span style={{
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                you can trust
              </span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {WHY_FEATURES.map((f) => (
                <FeatureItem key={f.title} {...f} />
              ))}
            </div>
          </div>

          {/* ── Stats panel ── */}
          <div className="reveal" style={{
            background: "linear-gradient(135deg, #0b1e3d, #1a3a6e)",
            borderRadius: "24px", padding: "48px 36px",
            boxShadow: "0 30px 80px rgba(11,30,61,0.35)",
            display: "flex", flexDirection: "column", gap: "20px",
          }}>
            {WHY_STATS.map(([num, label]) => (
              <StatRow key={label} num={num} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
