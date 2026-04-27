import { useEffect, useRef, useState } from "react";
import ServiceItemDetail from "./ServiceItemDetail";

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

/* ─── decorative image panel ──────────────────────────────────────────────── */
function ImagePanel({ service, isMobile }) {
  const { icon, title, accentColor = "#c9a84c", bgGradient } = service;

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        minHeight: isMobile ? "280px" : "560px",
        background: bgGradient || "linear-gradient(135deg, #0b1e3d 0%, #122648 100%)",
        border: `1px solid ${accentColor}33`,
        boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}22`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "32px 24px" : "48px 32px",
        gap: isMobile ? "16px" : "28px",
      }}
    >
      {/* dot-grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle, ${accentColor}30 1px, transparent 1px)`,
        backgroundSize: isMobile ? "16px 16px" : "24px 24px",
        opacity: 0.6,
      }} />

      {/* diagonal stripe */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `repeating-linear-gradient(
          -45deg, transparent, transparent 36px,
          ${accentColor}08 36px, ${accentColor}08 37px)`,
      }} />

      {/* glow orb top */}
      <div style={{
        position: "absolute", top: "-80px", right: "-60px",
        width: isMobile ? "200px" : "300px",
        height: isMobile ? "200px" : "300px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* glow orb bottom */}
      <div style={{
        position: "absolute", bottom: "-80px", left: "-60px",
        width: isMobile ? "180px" : "260px",
        height: isMobile ? "180px" : "260px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* rotating ring */}
      <div style={{
        position: "absolute",
        width: isMobile ? "180px" : "280px",
        height: isMobile ? "180px" : "280px",
        border: `1px dashed ${accentColor}30`,
        borderRadius: "50%",
        animation: "rotateBg 20s linear infinite",
        pointerEvents: "none",
        display: isMobile ? "none" : "block",
      }} />
      <div style={{
        position: "absolute",
        width: isMobile ? "120px" : "180px",
        height: isMobile ? "120px" : "180px",
        border: `1px dashed ${accentColor}20`,
        borderRadius: "50%",
        animation: "rotateBg 14s linear infinite reverse",
        pointerEvents: "none",
        display: isMobile ? "none" : "block",
      }} />

      {/* main icon */}
      <div style={{
        position: "relative",
        width: isMobile ? "80px" : "130px",
        height: isMobile ? "80px" : "130px",
        borderRadius: "32px",
        background: `${accentColor}22`,
        border: `2px solid ${accentColor}55`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: isMobile ? "2.2rem" : "4rem",
        boxShadow: `0 16px 48px ${accentColor}30`,
      }}>
        {icon}
      </div>

      {/* service title */}
      <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: 700,
          color: "#fff", lineHeight: 1.3,
          marginBottom: "12px",
        }}>
          {title}
        </h3>
        <div style={{
          width: "60px", height: "3px",
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          margin: "0 auto 16px",
          borderRadius: "2px",
        }} />
        <p style={{ color: `${accentColor}cc`, fontSize: isMobile ? "0.7rem" : "0.82rem", letterSpacing: "0.12em", fontWeight: 600 }}>
          PROFESSIONAL TAX SERVICES
        </p>
      </div>

      {/* stats strip */}
      <div style={{
        position: "relative",
        display: "flex", gap: isMobile ? "16px" : "24px", zIndex: 1,
        marginTop: "8px",
      }}>
        {[["200+", "Clients"], ["5+", "Yrs Exp"], ["100%", "Compliant"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{
              fontSize: isMobile ? "1.1rem" : "1.4rem",
              fontWeight: 800,
              color: accentColor, fontFamily: "'Cormorant Garamond', serif",
            }}>{n}</div>
            <div style={{ fontSize: isMobile ? "0.6rem" : "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>{l}</div>
          </div>
        ))}
      </div>

      {/* bottom badge */}
      <div style={{
        position: "relative", zIndex: 1,
        background: `${accentColor}18`,
        border: `1px solid ${accentColor}44`,
        borderRadius: "100px",
        padding: isMobile ? "6px 14px" : "8px 20px",
        fontSize: isMobile ? "0.65rem" : "0.75rem",
        color: `${accentColor}ee`,
        fontWeight: 600, letterSpacing: "0.08em",
      }}>
        ✦ Finlorax Certified Experts ✦
      </div>
    </div>
  );
}

/* ─── main ServiceDetail ────────────────────────────────────────────────── */
/**
 * Props:
 *   service            – service object (from API or data.js fallback)
 *   serviceItemDetails – lookup map { [itemString]: itemDetailObject }
 *   onBack             – callback to return to the services grid
 */
export default function ServiceDetail({ service, serviceItemDetails = {}, onBack }) {
  const isMobile = useIsMobile();
  const topRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null); // item string key

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveItem(null);
  }, [service]);

  if (!service) return null;

  /* ── Show item detail page ─────────────────────────────────────────────── */
  if (activeItem !== null) {
    return (
      <ServiceItemDetail
        itemKey={activeItem}
        itemDetail={serviceItemDetails[activeItem] ?? null}
        accentColor={service.accentColor || "#c9a84c"}
        onBack={() => {
          setActiveItem(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  const { details, accentColor = "#c9a84c" } = service;

  return (
    <section ref={topRef} style={{ padding: isMobile ? "50px 4% 80px" : "80px 5% 120px", background: "#0b1e3d", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display:"inline-flex",
            alignItems:"center",
            gap:"8px",
            background:"rgba(201,168,76,0.08)",
            border:"1px solid rgba(201,168,76,0.3)",
            color:"#c9a84c",
            borderRadius:"100px",
            padding: isMobile ? "8px 16px" : "10px 22px",
            fontSize: isMobile ? "0.75rem" : "0.82rem",
            fontWeight:600,
            cursor:"pointer",
            marginBottom: isMobile ? "32px" : "56px",
            letterSpacing:"0.06em",
            transition:"background 0.25s, transform 0.2s"
          }}
          onMouseEnter={e=>{ e.currentTarget.style.background="rgba(201,168,76,0.16)"; e.currentTarget.style.transform="translateX(-4px)" }}
          onMouseLeave={e=>{ e.currentTarget.style.background="rgba(201,168,76,0.08)"; e.currentTarget.style.transform="translateX(0)" }}>
          ← Back to Services
        </button>

        {/* Two-column layout */}
        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.35fr",
          gap: isMobile ? "36px" : "60px",
          alignItems: isMobile ? "unset" : "start"
        }} className="service-detail-grid">

          {/* LEFT */}
          <div style={{ position: isMobile ? "relative" : "sticky", top: isMobile ? "auto" : "100px" }}>
            <ImagePanel service={service} isMobile={isMobile} />
          </div>

          {/* RIGHT */}
          <div>
            <h2 style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontSize: isMobile ? "clamp(1.5rem, 5vw, 2rem)" : "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight:800,
              color:"#fff",
              lineHeight:1.2,
              marginBottom:"6px"
            }}>
              {service.title}
            </h2>
            <div style={{
              width: isMobile ? "50px" : "70px",
              height:"3px",
              background:`linear-gradient(90deg, ${accentColor}, transparent)`,
              borderRadius:"2px",
              marginBottom: isMobile ? "20px" : "28px"
            }} />

            {/* Intro paragraph */}
            <p style={{
              color:"rgba(255,255,255,0.72)",
              fontSize: isMobile ? "0.9rem" : "1rem",
              lineHeight:"1.9",
              marginBottom: isMobile ? "32px" : "44px",
              textAlign:"justify"
            }}>
              {details.intro}
            </p>

            {details.sections.map((sec, si) => (
              <div key={si} style={{ marginBottom: isMobile ? "28px" : "40px" }}>
                {/* Section heading */}
                <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px" }}>
                  <div style={{ width:"4px",minHeight:"22px",background:`linear-gradient(to bottom, ${accentColor}, ${accentColor}44)`,borderRadius:"4px",alignSelf:"stretch" }} />
                  <h4 style={{
                    fontFamily:"'Cormorant Garamond', serif",
                    fontSize: isMobile ? "1rem" : "1.15rem",
                    fontWeight:700,
                    color:accentColor,
                    margin:0
                  }}>
                    {sec.heading}
                  </h4>
                </div>

                {sec.subheading && (
                  <p style={{
                    color:"rgba(255,255,255,0.65)",
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    marginBottom:"12px",
                    marginLeft:"16px",
                    fontStyle:"italic"
                  }}>
                    {sec.subheading}
                  </p>
                )}

                {/* Bullet items — clickable if item detail exists */}
                <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px" }}>
                  {sec.items.map((item, ii) => {
                    const hasDetail = !!serviceItemDetails[item];
                    return (
                      <li
                        key={ii}
                        onClick={() => hasDetail && setActiveItem(item)}
                        style={{
                          display:"flex",
                          alignItems:"flex-start",
                          gap:"12px",
                          background:"rgba(255,255,255,0.03)",
                          border:"1px solid rgba(255,255,255,0.06)",
                          borderRadius:"10px",
                          padding: isMobile ? "10px 12px" : "12px 16px",
                          transition:"border-color 0.25s, background 0.25s, transform 0.2s",
                          cursor: hasDetail ? "pointer" : "default",
                          position: "relative",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = `${accentColor}${hasDetail ? "88" : "44"}`;
                          e.currentTarget.style.background  = `${accentColor}${hasDetail ? "12" : "08"}`;
                          if (hasDetail) e.currentTarget.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                          e.currentTarget.style.background  = "rgba(255,255,255,0.03)";
                          e.currentTarget.style.transform   = "translateX(0)";
                        }}
                      >
                        {/* dot */}
                        <span style={{ width:"8px",height:"8px",borderRadius:"50%",background:accentColor,flexShrink:0,marginTop:"5px",boxShadow:`0 0 6px ${accentColor}88` }} />

                        <span style={{ color:"rgba(255,255,255,0.82)",fontSize: isMobile ? "0.85rem" : "0.92rem",lineHeight:"1.65",flex:1 }}>
                          {item}
                        </span>

                        {/* Arrow indicator for clickable items */}
                        {hasDetail && (
                          <span style={{ color: accentColor, fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, alignSelf: "center", opacity: 0.7 }}>
                            →
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* CTA strip */}
            <div style={{
              marginTop: isMobile ? "32px" : "48px",
              background:"linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
              border:"1px solid rgba(201,168,76,0.25)",
              borderRadius:"16px",
              padding: isMobile ? "20px 16px" : "28px 32px",
              display:"flex",
              alignItems:"center",
              justifyContent: isMobile ? "flex-start" : "space-between",
              gap: isMobile ? "16px" : "24px",
              flexWrap:"wrap"
            }}>
              <div>
                <p style={{ color:"#c9a84c",fontWeight:700,fontSize: isMobile ? "0.9rem" : "1rem",marginBottom:"4px" }}>Need expert guidance?</p>
                <p style={{ color:"rgba(255,255,255,0.5)",fontSize: isMobile ? "0.75rem" : "0.84rem" }}>Our team is ready to help — reach out today.</p>
              </div>
              <a href="tel:9597927469" style={{
                display:"inline-flex",
                alignItems:"center",
                gap:"8px",
                background:"linear-gradient(135deg, #c9a84c 0%, #e8c96a 100%)",
                color:"#0b1e3d",
                borderRadius:"100px",
                padding: isMobile ? "10px 20px" : "12px 28px",
                fontSize: isMobile ? "0.8rem" : "0.88rem",
                fontWeight:700,
                textDecoration:"none",
                letterSpacing:"0.04em",
                whiteSpace:"nowrap",
                transition:"transform 0.2s, box-shadow 0.2s",
                boxShadow:"0 8px 24px rgba(201,168,76,0.3)" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 14px 36px rgba(201,168,76,0.45)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 24px rgba(201,168,76,0.3)"}}>
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes rotateBg {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
