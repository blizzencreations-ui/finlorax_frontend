import { useState, useEffect } from "react";
import { EXP_ITEMS } from "../constants/data";
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

/* ── individual card ─────────────────────────────────────────────────────── */
function ExpCard({ item, index, isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        animationDelay: `${index * 120}ms`,
        background: "#fff",
        border: `1px solid ${hov ? "rgba(241,185,33,0.71)" : "rgba(11,30,61,0.07)"}`,
        borderRadius: "20px",
        padding: isMobile ? "24px 20px" : "36px 28px",
        position: "relative", overflow: "hidden",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? "0 20px 60px rgba(11,30,61,0.12)"
          : "0 4px 16px rgba(11,30,61,0.05)",
        transition: "transform 0.3s, box-shadow 0.3s, border 0.3s",
        cursor: "default",
        /* horizontal card layout on mobile */
        display: isMobile ? "flex" : "block",
        gap: isMobile ? "16px" : "0",
        alignItems: isMobile ? "flex-start" : "unset",
      }}
    >
      {/* Background number */}
      <div style={{
        position: "absolute", top: "12px", right: "16px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: isMobile ? "3rem" : "4.5rem",
        fontWeight: 900,
        color: hov ? "rgba(201,168,76,0.91)" : "rgba(11,30,61,0.06)",
        lineHeight: 1, transition: "color 0.3s",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {item.num}
      </div>

      {/* Icon */}
      <div style={{
        width: isMobile ? "44px" : "52px",
        height: isMobile ? "44px" : "52px",
        borderRadius: "14px", flexShrink: 0,
        background: hov
          ? "linear-gradient(135deg, #0b1e3d, #1a3a6e)"
          : "linear-gradient(135deg, #0b2d5e, #1a5096)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: isMobile ? "1.2rem" : "1.4rem",
        marginBottom: isMobile ? "0" : "20px",
        boxShadow: hov ? "0 8px 24px rgba(11,30,61,0.35)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        {item.icon}
      </div>

      {/* Text block */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? "1.05rem" : "1.15rem",
          fontWeight: 700, color: "#0b1e3d",
          marginBottom: "8px", marginTop: isMobile ? "2px" : "0",
        }}>
          {item.title}
        </h4>
        <p style={{
          fontSize: isMobile ? "0.82rem" : "0.87rem",
          textAlign: "justify", color: "#6b7a90",
          lineHeight: "1.75", margin: 0,
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ── section ─────────────────────────────────────────────────────────────── */
export default function CustomerExperience() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      padding: isMobile ? "70px 5%" : "110px 5%",
      background: "#f7f4ee",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* heading */}
        <div className="reveal" style={{
          textAlign: "center",
          marginBottom: isMobile ? "36px" : "60px",
        }}>
          <SectionLabel label="Customer Experience" center />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(1.7rem, 6vw, 2.2rem)" : "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0b1e3d", margin: 0,
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

        {/* card grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "14px" : "28px",
        }}>
          {EXP_ITEMS.map((item, i) => (
            <ExpCard key={item.title} item={item} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}