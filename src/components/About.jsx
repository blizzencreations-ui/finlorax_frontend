import { useAboutData } from "../hooks/useAboutData";
import SectionLabel from "./SectionLabel";

export default function About() {
  const { aboutData, loading } = useAboutData();

  if (loading) {
    return <section style={{ padding: "110px 5%", background: "#f7f4ee", minHeight: "400px" }}>Loading...</section>;
  }
  return (
    <section
      id="about"
      style={{ padding: "110px 5%", background: "#f7f4ee" }}
    >
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "80px", alignItems: "center",
      }}>

        {/* ── Visual stack ── */}
        <div className="reveal" style={{ position: "relative", height: "480px" }}>

          {/* Primary card */}
          <div className="floating-1" style={{
            position: "absolute", top: 0, left: 0,
            width: "72%", height: "340px",
            background: "linear-gradient(135deg, #0b2d5e, #1a5096)",
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 24px 64px rgba(11,30,61,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "12px",
          }}>
            <div style={{ fontSize: "3.5rem" }}>📋</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem", color: "rgba(255,255,255,0.9)",
              fontWeight: 600, textAlign: "center", padding: "0 24px",
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
          <div className="floating-2" style={{
            position: "absolute", bottom: 0, right: 0,
            width: "55%", height: "240px",
            background: "linear-gradient(135deg, #c9a84c, #a07830)",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(201,168,76,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "8px",
          }}>
            <div style={{ fontSize: "2.8rem" }}>📈</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem", color: "#0b1e3d", fontWeight: 700,
            }}>
              Maximize Savings
            </div>
          </div>

          {/* Experience badge */}
          <div style={{
            position: "absolute", top: "50%", right: "-18px",
            transform: "translateY(-50%)",
            background: "linear-gradient(135deg, #c9a84c, #8b6420)",
            borderRadius: "18px", padding: "20px 22px",
            textAlign: "center",
            boxShadow: "0 12px 40px rgba(201,168,76,0.45)",
            zIndex: 5,
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.4rem", fontWeight: 900,
              color: "#0b1e3d", lineHeight: 1,
            }}>{aboutData.experienceYears}+</div>
            <div style={{
              fontSize: "0.68rem", color: "#0b1e3d",
              fontWeight: 700, opacity: 0.8, letterSpacing: "0.06em",
            }}>
              YEARS OF<br />EXPERIENCE
            </div>
          </div>
        </div>

        {/* ── Text content ── */}
        <div className="reveal">
          <SectionLabel label="About Us" />

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0b1e3d",
            lineHeight: 1.2, marginBottom: "24px",
          }}>
            {aboutData.headline}
          </h2>

          {[aboutData.subheadline || aboutData.description].map((text, i) => (
            <p key={i} style={{ color: "#6b7a90", lineHeight: "1.85", marginBottom: "16px", fontSize: "0.97rem" }}>
              {text}
            </p>
          ))}

          <ul style={{ listStyle: "none", margin: "28px 0 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {(aboutData.bullets || []).map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.92rem", fontWeight: 500, color: "#2c3e50" }}>
                <div style={{
                  width: "24px", height: "24px", borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)", color: "#c9a84c",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.7rem", fontWeight: 700, flexShrink: 0,
                }}>✓</div>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#services"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #0b1e3d, #1a3a6e)",
              color: "#c9a84c", padding: "14px 32px", borderRadius: "10px",
              fontWeight: 700, textDecoration: "none", fontSize: "0.92rem",
              boxShadow: "0 6px 24px rgba(11,30,61,0.3)",
              border: "1px solid rgba(201,168,76,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; }}
          >
            Discover More →
          </a>
        </div>
      </div>
    </section>
  );
}
