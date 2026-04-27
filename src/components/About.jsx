import { useState, useEffect } from "react";
import { useAboutData } from "../hooks/useAboutData";
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

export default function About() {
  const { aboutData, loading, source } = useAboutData();
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      style={{ padding: isMobile ? "70px 5%" : "110px 5%", background: "#f7f4ee" }}
    >
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "48px" : "80px",
        alignItems: "center",
      }}>

        {/* ══ Visual stack ════════════════════════════════════════════════ */}
        <div
          className="reveal"
          style={{
            position: "relative",
            height: isMobile ? "280px" : "480px",
            /* on mobile, push visual below text by reordering */
            order: isMobile ? 2 : 1,
          }}
        >
          {/* Primary card */}
          <div
            className="floating-1"
            style={{
              position: "absolute", top: 0, left: 0,
              width: isMobile ? "68%" : "72%",
              height: isMobile ? "190px" : "340px",
              background: "linear-gradient(135deg, #0b2d5e, #1a5096)",
              borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 24px 64px rgba(11,30,61,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "10px",
            }}
          >
            <div style={{ fontSize: isMobile ? "2.2rem" : "3.5rem" }}>📋</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "0.9rem" : "1.2rem",
              color: "rgba(255,255,255,0.9)",
              fontWeight: 600, textAlign: "center",
              padding: "0 16px",
            }}>
              Professional Tax Advisory
            </div>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #c9a84c, transparent)",
            }} />
          </div>

          {/* Secondary card */}
          <div
            className="floating-2"
            style={{
              position: "absolute", bottom: 0, right: 0,
              width: isMobile ? "50%" : "55%",
              height: isMobile ? "140px" : "240px",
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(201,168,76,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "6px",
            }}
          >
            <div style={{ fontSize: isMobile ? "1.8rem" : "2.8rem" }}>📈</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "0.85rem" : "1.1rem",
              color: "#0b1e3d", fontWeight: 700,
            }}>
              Maximize Savings
            </div>
          </div>

          {/* Experience badge */}
          <div style={{
            position: "absolute",
            top: isMobile ? "auto" : "50%",
            bottom: isMobile ? "auto" : "auto",
            right: isMobile ? "auto" : "-18px",
            left: isMobile ? "60%" : "auto",
            top: isMobile ? "38%" : "50%",
            transform: isMobile ? "translateY(-50%)" : "translateY(-50%)",
            background: "linear-gradient(135deg, #c9a84c, #8b6420)",
            borderRadius: "16px",
            padding: isMobile ? "12px 14px" : "20px 22px",
            textAlign: "center",
            boxShadow: "0 12px 40px rgba(201,168,76,0.45)",
            zIndex: 5,
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "1.6rem" : "2.4rem",
              fontWeight: 900, color: "#0b1e3d", lineHeight: 1,
            }}>
              {aboutData.experienceYears}+
            </div>
            <div style={{
              fontSize: isMobile ? "0.55rem" : "0.68rem",
              color: "#0b1e3d", fontWeight: 700,
              opacity: 0.8, letterSpacing: "0.06em",
            }}>
              YEARS OF<br />EXPERIENCE
            </div>
          </div>
        </div>

        {/* ══ Text content ════════════════════════════════════════════════ */}
        <div className="reveal" style={{ order: isMobile ? 1 : 2 }}>
          <SectionLabel label="About Us" />

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(1.7rem, 6vw, 2.2rem)" : "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0b1e3d",
            lineHeight: 1.2, marginBottom: "20px",
          }}>
            {aboutData.headline}
          </h2>

          {[aboutData.subheadline || aboutData.description].map((text, i) => (
            <p key={i} style={{
              color: "#6b7a90", lineHeight: "1.85",
              marginBottom: "16px",
              fontSize: isMobile ? "0.9rem" : "0.97rem",
            }}>
              {text}
            </p>
          ))}

          {/* Bullets — 2-col grid on mobile */}
          <ul style={{
            listStyle: "none", margin: "24px 0 32px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
            gap: isMobile ? "10px" : "12px",
            padding: 0,
          }}>
            {(aboutData.bullets || []).map((item) => (
              <li
                key={item}
                style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  fontSize: isMobile ? "0.82rem" : "0.92rem",
                  fontWeight: 500, color: "#2c3e50",
                }}
              >
                <div style={{
                  width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
                  background: "rgba(201,168,76,0.15)", color: "#c9a84c",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", fontWeight: 700,
                }}>✓</div>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#services"
            style={{
              display: isMobile ? "block" : "inline-block",
              textAlign: isMobile ? "center" : "left",
              background: "linear-gradient(135deg, #0b1e3d, #1a3a6e)",
              color: "#c9a84c",
              padding: isMobile ? "15px 32px" : "14px 32px",
              borderRadius: "10px", fontWeight: 700,
              textDecoration: "none", fontSize: "0.92rem",
              boxShadow: "0 6px 24px rgba(11,30,61,0.3)",
              border: "1px solid rgba(201,168,76,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Discover More →
          </a>
        </div>
      </div>
    </section>
  );
}