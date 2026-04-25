import { useEffect, useRef, useState } from "react";

/**
 * Props:
 *   itemKey    – the original item string (used only for the fallback message)
 *   itemDetail – detail object { photo, photoAlt, badge, heading, subheading,
 *                                intro, sections, cta } or null if no detail exists
 *   accentColor
 *   onBack
 */
export default function ServiceItemDetail({ itemKey, itemDetail, accentColor = "#c9a84c", onBack }) {
  const topRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError,  setImgError]  = useState(false);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setImgLoaded(false);
    setImgError(false);
  }, [itemKey]);

  /* ── No detail available — clean fallback ─────────────────────────────── */
  if (!itemDetail) {
    return (
      <section ref={topRef} style={{ padding: "60px 5%", background: "#0b1e3d", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <BackBtn onBack={onBack} accentColor={accentColor} />
          <div style={{
            marginTop: "40px", textAlign: "center",
            color: "rgba(255,255,255,0.5)", fontSize: "1.1rem",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📄</div>
            <p>Detailed information for <strong style={{ color: "#fff" }}>"{itemKey}"</strong> is coming soon.</p>
            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              Please contact us directly for more details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { photo, photoAlt, badge, heading, subheading, intro, sections, cta } = itemDetail;

  return (
    <section
      ref={topRef}
      style={{ background: "#0b1e3d", minHeight: "100vh", padding: "0" }}
    >
      {/* ── Back button strip ───────────────────────────────────────────── */}
      <div style={{
        padding: "24px 5%",
        background: "rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BackBtn onBack={onBack} accentColor={accentColor} />
        </div>
      </div>

      {/* ── Main two-column body ─────────────────────────────────────────── */}
      <div
        className="item-detail-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          height: "calc(100vh - 73px)",
        }}
      >
        {/* ══ LEFT — Photo panel ══════════════════════════════════════════ */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          position: "relative",
        }}>
          <div
            className="image-card"
            style={{
              width: "400px",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              boxShadow: `0 30px 80px rgba(0,0,0,0.6)`,
              transform: imgLoaded
                ? "translateY(0px) scale(1)"
                : "translateY(80px) scale(0.9)",
              opacity: imgLoaded ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
              animation: "floatCard 6s ease-in-out infinite",
            }}
          >
            {!imgError ? (
              <img
                src={photo}
                alt={photoAlt}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                style={{ width: "100%", height: "460px", objectFit: "cover" }}
              />
            ) : (
              <div style={{
                height: "460px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: "3rem",
              }}>
                🏢
              </div>
            )}

            {/* Gradient glow */}
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(120deg, transparent 60%, ${accentColor}22)`,
              pointerEvents: "none",
            }} />

            {/* Badge */}
            {badge && (
              <div style={{
                position: "absolute", bottom: "16px", left: "16px",
                background: accentColor, color: "#0b1e3d",
                padding: "6px 14px", borderRadius: "50px",
                fontSize: "0.7rem", fontWeight: "700",
                boxShadow: `0 6px 20px ${accentColor}66`,
              }}>
                ✦ {badge}
              </div>
            )}
          </div>
        </div>

        {/* ══ RIGHT — Content panel ════════════════════════════════════════ */}
        <div
          className="item-detail-content"
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "60px",
            scrollBehavior: "smooth",
          }}
        >
          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.2, marginBottom: "10px",
          }}>
            {heading}
          </h1>

          {/* Sub-heading */}
          <p style={{
            color: accentColor, fontSize: "1rem",
            fontWeight: 600, marginBottom: "20px", letterSpacing: "0.02em",
          }}>
            {subheading}
          </p>

          {/* Gold rule */}
          <div style={{
            width: "70px", height: "3px",
            background: `linear-gradient(90deg, ${accentColor}, transparent)`,
            borderRadius: "2px", marginBottom: "32px",
          }} />

          {/* Intro */}
          <p style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1rem", lineHeight: "1.9",
            marginBottom: "48px", textAlign: "justify",
          }}>
            {intro}
          </p>

          {/* Sections */}
          {(sections || []).map((sec, si) => (
            <div key={si} style={{ marginBottom: "40px" }}>

              {/* Section heading */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "4px", minHeight: "24px",
                  background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}33)`,
                  borderRadius: "4px", alignSelf: "stretch",
                }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem", fontWeight: 700,
                  color: accentColor, margin: 0,
                }}>
                  {sec.heading}
                </h3>
              </div>

              {/* Optional body text */}
              {sec.body && (
                <p style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.93rem", lineHeight: "1.85",
                  marginLeft: "16px", marginBottom: "16px", textAlign: "justify",
                }}>
                  {sec.body}
                </p>
              )}

              {/* Bullet items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {(sec.items || []).map((item, ii) => (
                  <div
                    key={ii}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "14px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "12px", padding: "14px 18px",
                      transition: "border-color 0.25s, background 0.25s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${accentColor}55`;
                      e.currentTarget.style.background  = `${accentColor}0a`;
                      e.currentTarget.style.transform   = "translateX(4px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background  = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.transform   = "translateX(0)";
                    }}
                  >
                    <span style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: accentColor, flexShrink: 0, marginTop: "6px",
                      boxShadow: `0 0 8px ${accentColor}88`,
                    }} />
                    <span style={{
                      color: "rgba(255,255,255,0.84)",
                      fontSize: "0.93rem", lineHeight: "1.7",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA strip */}
          {cta && (
            <div style={{
              marginTop: "52px",
              background: `linear-gradient(135deg, ${accentColor}12 0%, ${accentColor}06 100%)`,
              border: `1px solid ${accentColor}33`,
              borderRadius: "18px", padding: "32px 36px",
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              gap: "24px", flexWrap: "wrap",
            }}>
              <div>
                <p style={{ color: accentColor, fontWeight: 700, fontSize: "1.05rem", marginBottom: "6px" }}>
                  {cta}
                </p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem" }}>
                  Call us or send a message — we respond within 24 hours.
                </p>
              </div>
              <a
                href="tel:9597927469"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                  color: "#0b1e3d", borderRadius: "100px",
                  padding: "14px 32px", fontSize: "0.9rem", fontWeight: 800,
                  textDecoration: "none", letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                  boxShadow: `0 8px 28px ${accentColor}44`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px ${accentColor}55`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 28px ${accentColor}44`;
                }}
              >
                📞 Call Us Now
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @keyframes floatCard {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .item-detail-content::-webkit-scrollbar { width: 6px; }
        .item-detail-content::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2); border-radius: 10px;
        }
        .item-detail-content > * {
          animation: fadeUp 0.6s ease forwards;
        }
        @media (max-width: 900px) {
          .item-detail-grid { grid-template-columns: 1fr !important; }
          .item-detail-grid > div:first-child {
            height: 260px !important;
            display: flex; justify-content: center; align-items: center;
          }
          .item-detail-content {
            padding: 36px 24px 60px !important;
            overflow: visible !important;
          }
        }
      `}</style>
    </section>
  );
}

function BackBtn({ onBack, accentColor = "#c9a84c" }) {
  return (
    <button
      onClick={onBack}
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        background: `${accentColor}14`,
        border: `1px solid ${accentColor}44`,
        color: accentColor, borderRadius: "100px",
        padding: "9px 22px", fontSize: "0.82rem", fontWeight: 700,
        cursor: "pointer", letterSpacing: "0.05em",
        transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${accentColor}26`;
        e.currentTarget.style.transform  = "translateX(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${accentColor}14`;
        e.currentTarget.style.transform  = "translateX(0)";
      }}
    >
      ← Back
    </button>
  );
}
