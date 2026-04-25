import { useState } from "react";
import { EXP_ITEMS } from "../constants/data";
import SectionLabel from "./SectionLabel";

function ExpCard({ item, index }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        animationDelay: `${index * 120}ms`,
        background: "#fff",
        border: `1px solid ${hov ? "rgba(241, 185, 33, 0.71)" : "rgba(11,30,61,0.07)"}`,
        borderRadius: "20px", padding: "36px 28px",
        position: "relative", overflow: "hidden",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? "0 20px 60px rgba(11,30,61,0.12)"
          : "0 4px 16px rgba(11,30,61,0.05)",
        transition: "transform 0.3s, box-shadow 0.3s, border 0.3s",
        cursor: "default",
      }}
    >
      {/* Background number */}
      <div style={{
        position: "absolute", top: "16px", right: "20px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "4.5rem", fontWeight: 900,
        color: hov ? "rgba(201, 168, 76, 0.91)" : "rgba(11,30,61,0.06)",
        lineHeight: 1, transition: "color 0.3s",
        userSelect: "none",
      }}>
        {item.num}
      </div>

      {/* Icon */}
      <div style={{
        width: "52px", height: "52px", borderRadius: "14px",
        background: hov
          ? "linear-gradient(135deg, #0b1e3d, #1a3a6e)"
          : "linear-gradient(135deg, #0b2d5e, #1a5096)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", marginBottom: "20px",
        boxShadow: hov ? "0 8px 24px rgba(11,30,61,0.35)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        {item.icon}
      </div>

      <h4 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.15rem", fontWeight: 700,
        color: "#0b1e3d", marginBottom: "12px",
      }}>
        {item.title}
      </h4>
      <p style={{ fontSize: "0.87rem",textAlign:"Justify", color: "#6b7a90", lineHeight: "1.75" }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function CustomerExperience() {
  return (
    <section style={{ padding: "110px 5%", background: "#f7f4ee" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <SectionLabel label="Customer Experience" center />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0b1e3d",
          }}>
            Enhancing Customer{" "}
            <span style={{
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Experience
            </span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {EXP_ITEMS.map((item, i) => (
            <ExpCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
