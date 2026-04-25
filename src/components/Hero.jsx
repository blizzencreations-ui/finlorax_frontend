
import { useMemo, useState, useEffect } from "react";
import { STATS, PARTNER_TAGS } from "../constants/data";

export default function Hero() {
  /* Generate particles once – stable across renders */
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${3 + Math.random() * 3}s`,
      })),
    []
  );

  const [showStats, setShowStats] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setShowStats(prev => !prev);
  }, 5000); // 5 seconds

  return () => clearInterval(interval);
}, []);

  const floatClasses = ["floating-1", "floating-2", "floating-3", "floating-1"];
  const cardPositions = [
    { top: "0%",  left: "5%"  },
    { top: "5%",  right: "2%" },
    { bottom: "8%", left: "0%" },
    { bottom: "2%", right: "5%" },
  ];

  return (
    <section
      id="home"
      className="hero-bg"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}
    >
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration, opacity: 0.4 }}
        />
      ))}

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glows */}
      <div style={{
        position: "absolute", width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)",
        top: "-150px", right: "-100px", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(26,64,128,0.3) 0%, transparent 65%)",
        bottom: "-100px", left: "-100px", pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ maxWidth: "1600px",margin:"3%" ,padding: "50px 2% 40px", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "80px", alignItems: "center" }}>

          {/* Left */}
            <div style={{maxHeight:"700px"}}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.35)",
                color: "#c9a84c", padding: "6px 18px", borderRadius: "100px",
                fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: "28px",
                animation: "borderGlow 3s ease-in-out infinite",
              }}>★ Asia's Top 100 Consulting Firms</div>

              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 900, lineHeight: 1.1,
                color: "#fff", marginBottom: "26px",
              }}>
                Need Expert Help With{" "}<br />
                <span className="gold-text">Your Finances?</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "2.00rem", lineHeight: "1.8", marginBottom: "38px", maxWidth: "700px" }}>
                Trusted & Tailored Accounting Solutions designed to simplify your finances and help your business grow with confidence.
              </p>
              <div style={{ display: "flex", gap: "14px", marginBottom: "50px", flexWrap: "wrap" }}>
                <a href="#services" style={{
                  background: "linear-gradient(135deg, #c9a84c, #a07830)",
                  color: "#0b1e3d", padding: "14px 34px", borderRadius: "10px",
                  fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
                  boxShadow: "0 6px 24px rgba(201,168,76,0.45)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={e => { e.target.style.transform="translateY(-3px)"; e.target.style.boxShadow="0 12px 36px rgba(201,168,76,0.55)"; }}
                onMouseLeave={e => { e.target.style.transform="translateY(0)"; e.target.style.boxShadow="0 6px 24px rgba(201,168,76,0.45)"; }}
                >Explore Services</a>
                <a href="#about" style={{
                  border: "2px solid rgba(255,255,255,0.25)", color: "#fff",
                  padding: "14px 34px", borderRadius: "10px", fontWeight: 600,
                  textDecoration: "none", fontSize: "0.95rem",
                  transition: "border-color 0.2s, background 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={e => { e.target.style.borderColor="#c9a84c"; e.target.style.background="rgba(201,168,76,0.08)"; }}
                onMouseLeave={e => { e.target.style.borderColor="rgba(255,255,255,0.25)"; e.target.style.background="transparent"; }}
                >Get Free Consultation</a>
              </div>
              {/* <div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.73rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>
                  Trusted by 10,000+ companies
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {["GSTN","MCA21","FSSAI","ISO","MSME","IEC"].map(p => (
                    <div key={p} style={{
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px", padding: "7px 14px",
                      color: "rgba(255,255,255,0.55)", fontSize: "0.73rem", fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}>{p}</div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Right - 3D floating stat cards */}
            <div style={{ position: "relative", height: "470px", width:"500px" }}>
              {showStats ?(
    /* BUSINESS WOMAN IMAGE */
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      border:"none",
      alignItems: "center",
      justifyContent: "center",
      animation: "fadeIn 0.6s ease",
    }}>
      <img
        src="/hero_ad.png" // 👈 put your image here
        alt="Business Woman"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          
        }}
      />
    </div>
  ):(<>
              {/* Central rotating ring */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                width: "300px", height: "300px",
                transform: "translate(-50%, -50%)",
                border: "1px dashed rgba(201,168,76,0.2)",
                borderRadius: "50%",
                animation: "rotateBg 20s linear infinite",
              }} />
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                width: "220px", height: "220px",
                transform: "translate(-50%, -50%)",
                border: "1px dashed rgba(201,168,76,0.12)",
                borderRadius: "50%",
                animation: "rotateBg 15s linear infinite reverse",
              }} />

              {/* Stat cards positioned around */}
              {STATS.map((s, i) => {
                const positions = [
                  { top: "0%", left: "5%", cls: "floating-1" },
                  { top: "5%", right: "2%", cls: "floating-2" },
                  { bottom: "8%", left: "0%", cls: "floating-3" },
                  { bottom: "2%", right: "5%", cls: "floating-1" },
                ];
                const pos = positions[i];
                return (
                  <div key={i} className={pos.cls} style={{
                    position: "absolute", ...pos,
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "18px", padding: "22px 28px",
                    textAlign: "center", minWidth: "140px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                  }}>
                    
                    <img src={s.icon} alt={s.label} style={{ width: "100px", height: "60px", marginBottom: "8px" }} />
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem", fontWeight: 900,
                      background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>{s.num}</div>
                    <div style={{ fontSize: "1rem", color: "rgb(243, 241, 241)", marginTop: "4px", fontWeight: 500 }}>{s.label}</div>
                  </div>
                );
              })}

              {/* Center badge */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "linear-gradient(135deg, #c9a84c, #8b6420)",
                borderRadius: "50%", width: "110px", height: "110px",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 0 12px rgba(201,168,76,0.12), 0 0 0 24px rgba(201,168,76,0.05)",
                animation: "pulse-gold 3s ease-in-out infinite",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 900, color: "#0b1e3d", lineHeight: 1 }}>5+</div>
                <div style={{ fontSize: "0.65rem", color: "#0b1e3d", fontWeight: 700, opacity: 0.8 }}>Years</div>
              </div>
              </>)
               }
            </div>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Scroll
          <div style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)",
            animation: "float 2s ease-in-out infinite",
          }} />
        </div>
    </section>
  );
}
