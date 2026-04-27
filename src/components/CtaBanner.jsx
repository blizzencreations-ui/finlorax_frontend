import { useState, useEffect } from "react";

function useIsMobile(bp = 640) {
  const [mobile, setMobile] = useState(window.innerWidth < bp);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return mobile;
}

export default function CtaBanner() {
  const isMobile = useIsMobile();

  return (
    <div style={{
      background: "linear-gradient(135deg, #c9a84c 0%, #a07830 50%, #8b6420 100%)",
      padding: "0 5%", position: "relative", overflow: "hidden",
    }}>
      {/* Texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230b1e3d' fill-opacity='0.08'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: isMobile ? "48px 0" : "70px 0",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? "28px" : "40px",
        position: "relative", zIndex: 2,
      }}>

        {/* Text block */}
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(1.5rem, 6vw, 1.9rem)" : "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700, color: "#0b1e3d",
            marginBottom: "10px", lineHeight: 1.2,
          }}>
            Expert tax solutions to simplify compliance
          </h2>
          <p style={{
            color: "rgba(11,30,61,0.7)",
            fontSize: isMobile ? "0.9rem" : "1rem",
            maxWidth: "560px", lineHeight: "1.75",
            margin: 0,
          }}>
            From registrations to returns — we handle it all so you can focus on growing your business.
          </p>
        </div>

        {/* CTA button */}
          <a
          href="#quote"
          style={{
            background: "#0b1e3d", color: "#c9a84c",
            padding: isMobile ? "15px 28px" : "16px 36px",
            borderRadius: "10px", fontWeight: 700,
            textDecoration: "none",
            fontSize: isMobile ? "0.9rem" : "0.95rem",
            whiteSpace: "nowrap", flexShrink: 0,
            border: "1px solid rgba(11,30,61,0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 6px 24px rgba(11,30,61,0.2)",
            display: "inline-block",
            alignSelf: isMobile ? "stretch" : "auto",
            textAlign: isMobile ? "center" : "left",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(11,30,61,0.35)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 6px 24px rgba(11,30,61,0.2)";  }}
        >
          Contact Us Today →
        </a>
      </div>
    </div>
  );
}