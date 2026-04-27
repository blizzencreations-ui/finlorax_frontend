import { useMemo, useState, useEffect } from "react";
import { STATS, PARTNER_TAGS } from "../constants/data";

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

export default function Hero() {
  const isMobile = useIsMobile();

  const particles = useMemo(
    () =>
      Array.from({ length: isMobile ? 6 : 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${3 + Math.random() * 3}s`,
      })),
    [isMobile]
  );

  const [showStats, setShowStats] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShowStats((p) => !p), 5000);
    return () => clearInterval(interval);
  }, []);

  /* stat card positions – desktop vs mobile */
  const cardPositions = isMobile
    ? [
        { top: "0%",    left: "0%",   cls: "floating-1" },
        { top: "0%",    right: "0%",  cls: "floating-2" },
        { bottom: "0%", left: "0%",   cls: "floating-3" },
        { bottom: "0%", right: "0%",  cls: "floating-1" },
      ]
    : [
        { top: "0%",    left: "5%",   cls: "floating-1" },
        { top: "5%",    right: "2%",  cls: "floating-2" },
        { bottom: "8%", left: "0%",   cls: "floating-3" },
        { bottom: "2%", right: "5%",  cls: "floating-1" },
      ];

  return (
    <section
      id="home"
      className="hero-bg"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}
    >
      {/* ── Particles ──────────────────────────────────────────────────── */}
      {particles.map((p) => (
        <div key={p.id} className="particle" style={{
          left: p.left, top: p.top,
          animationDelay: p.delay, animationDuration: p.duration, opacity: 0.4,
        }} />
      ))}

      {/* ── Background grid ────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
        backgroundSize: isMobile ? "40px 40px" : "60px 60px",
      }} />

      {/* ── Radial glows ───────────────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        width: isMobile ? "400px" : "700px",
        height: isMobile ? "400px" : "700px",
        background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)",
        top: "-150px", right: "-100px", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: isMobile ? "300px" : "500px",
        height: isMobile ? "300px" : "500px",
        background: "radial-gradient(circle, rgba(26,64,128,0.3) 0%, transparent 65%)",
        bottom: "-100px", left: "-100px", pointerEvents: "none",
      }} />

      {/* ── Content wrapper ────────────────────────────────────────────── */}
      <div style={{
        maxWidth: "1600px",
        margin: isMobile ? "0" : "3%",
        padding: isMobile ? "100px 6% 60px" : "50px 2% 40px",
        width: "100%",
        position: "relative",
        zIndex: 2,
        boxSizing: "border-box",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
          gap: isMobile ? "40px" : "80px",
          alignItems: "center",
        }}>

          {/* ══ LEFT: text + CTA ════════════════════════════════════════ */}
          <div>

            {/* badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.35)",
              color: "#c9a84c", padding: "6px 16px", borderRadius: "100px",
              fontSize: isMobile ? "0.65rem" : "0.73rem",
              fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: "22px",
              animation: "borderGlow 3s ease-in-out infinite",
            }}>
              ★ Asia's Top 100 Consulting Firms
            </div>

            {/* headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "clamp(2rem, 8vw, 2.8rem)" : "clamp(2.6rem, 5vw, 4.2rem)",
              fontWeight: 900, lineHeight: 1.15,
              color: "#fff", marginBottom: "20px",
            }}>
              Need Expert Help With{" "}
              {!isMobile && <br />}
              <span className="gold-text">Your Finances?</span>
            </h1>

            {/* sub */}
            <p style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: isMobile ? "1rem" : "1.25rem",
              lineHeight: "1.8", marginBottom: "32px",
              maxWidth: isMobile ? "100%" : "700px",
            }}>
              Trusted &amp; Tailored Accounting Solutions designed to simplify your finances
              and help your business grow with confidence.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "12px",
              marginBottom: isMobile ? "0" : "50px",
            }}>
              <a
                href="#services"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #a07830)",
                  color: "#0b1e3d",
                  padding: isMobile ? "15px 28px" : "14px 34px",
                  borderRadius: "10px", fontWeight: 700,
                  textDecoration: "none",
                  fontSize: isMobile ? "0.95rem" : "0.95rem",
                  boxShadow: "0 6px 24px rgba(201,168,76,0.45)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-block",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 12px 36px rgba(201,168,76,0.55)"; }}
                onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 24px rgba(201,168,76,0.45)"; }}
              >
                Explore Services
              </a>
              <a
                href="#about"
                style={{
                  border: "2px solid rgba(255,255,255,0.25)", color: "#fff",
                  padding: isMobile ? "15px 28px" : "14px 34px",
                  borderRadius: "10px", fontWeight: 600,
                  textDecoration: "none",
                  fontSize: isMobile ? "0.95rem" : "0.95rem",
                  transition: "border-color 0.2s, background 0.2s",
                  display: "inline-block", textAlign: "center",
                }}
                onMouseEnter={(e) => { e.target.style.borderColor = "#c9a84c"; e.target.style.background = "rgba(201,168,76,0.08)"; }}
                onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.25)"; e.target.style.background = "transparent"; }}
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* ══ RIGHT: image or stat cards ══════════════════════════════ */}
          <div style={{
            position: "relative",
            height: isMobile ? "320px" : "470px",
            width: "100%",
            maxWidth: isMobile ? "100%" : "500px",
            margin: isMobile ? "0 auto" : "0",
          }}>

            {showStats ? (
              /* ── Hero image ──────────────────────────────────────────── */
              <div style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: "fadeIn 0.6s ease",
              }}>
                <img
                  src="/hero_ad.png"
                  alt="Business Woman"
                  style={{
                    width: "100%",
                    height: isMobile ? "320px" : "600px",
                    objectFit: isMobile ? "contain" : "cover",
                  }}
                />
              </div>
            ) : (
              /* ── Stat cards ──────────────────────────────────────────── */
              <>
                {/* Rotating rings */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: isMobile ? "200px" : "300px",
                  height: isMobile ? "200px" : "300px",
                  transform: "translate(-50%, -50%)",
                  border: "1px dashed rgba(201,168,76,0.2)",
                  borderRadius: "50%",
                  animation: "rotateBg 20s linear infinite",
                }} />
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: isMobile ? "140px" : "220px",
                  height: isMobile ? "140px" : "220px",
                  transform: "translate(-50%, -50%)",
                  border: "1px dashed rgba(201,168,76,0.12)",
                  borderRadius: "50%",
                  animation: "rotateBg 15s linear infinite reverse",
                }} />

                {/* Stat cards */}
                {STATS.map((s, i) => {
                  const pos = cardPositions[i];
                  return (
                    <div
                      key={i}
                      className={pos.cls}
                      style={{
                        position: "absolute", ...pos,
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: isMobile ? "14px" : "18px",
                        padding: isMobile ? "12px 14px" : "22px 28px",
                        textAlign: "center",
                        minWidth: isMobile ? "100px" : "140px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                      }}
                    >
                      <img
                        src={s.icon} alt={s.label}
                        style={{
                          width: isMobile ? "60px" : "100px",
                          height: isMobile ? "36px" : "60px",
                          marginBottom: "6px",
                          objectFit: "contain",
                        }}
                      />
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: isMobile ? "1.3rem" : "2rem",
                        fontWeight: 900,
                        background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      }}>
                        {s.num}
                      </div>
                      <div style={{
                        fontSize: isMobile ? "0.65rem" : "1rem",
                        color: "rgb(243,241,241)", marginTop: "3px", fontWeight: 500,
                      }}>
                        {s.label}
                      </div>
                    </div>
                  );
                })}

                {/* Centre badge */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "linear-gradient(135deg, #c9a84c, #8b6420)",
                  borderRadius: "50%",
                  width: isMobile ? "72px" : "110px",
                  height: isMobile ? "72px" : "110px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 0 12px rgba(201,168,76,0.12), 0 0 0 24px rgba(201,168,76,0.05)",
                  animation: "pulse-gold 3s ease-in-out infinite",
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile ? "1.4rem" : "2rem",
                    fontWeight: 900, color: "#0b1e3d", lineHeight: 1,
                  }}>5+</div>
                  <div style={{ fontSize: isMobile ? "0.5rem" : "0.65rem", color: "#0b1e3d", fontWeight: 700, opacity: 0.8 }}>
                    Years
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Scroll indicator (hidden on mobile to save space) ─────────── */}
        {!isMobile && (
          <div style={{
            position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
            color: "rgba(255,255,255,0.3)", fontSize: "0.72rem",
            fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            Scroll
            <div style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)",
              animation: "float 2s ease-in-out infinite",
            }} />
          </div>
        )}
      </div>
    </section>
  );
}