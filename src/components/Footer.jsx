import { useState, useEffect } from "react";
import { QUICK_LINKS, FOOTER_SERVICES, CONTACT_INFO } from "../constants/data";

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

/* ── footer link ─────────────────────────────────────────────────────────── */
function FooterLink({ children }) {
  const [hov, setHov] = useState(false);
  return (
    <li>
      <a
        href="#"
        style={{
          color: hov ? "#c9a84c" : "rgba(255,255,255,0.45)",
          textDecoration: "none", fontSize: "0.85rem",
          transition: "color 0.2s", display: "inline-block",
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </a>
    </li>
  );
}

/* ── collapsible section (mobile only) ──────────────────────────────────── */
function AccordionSection({ title, children, isMobile }) {
  const [open, setOpen] = useState(false);

  if (!isMobile) return (
    <div>
      <h5 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.05rem", marginBottom: "20px", fontWeight: 700 }}>
        {title}
      </h5>
      {children}
    </div>
  );

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%", background: "transparent", border: "none",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 0", cursor: "pointer",
        }}
      >
        <h5 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1rem", margin: 0, fontWeight: 700 }}>
          {title}
        </h5>
        <span style={{
          color: "#c9a84c", fontSize: "1rem",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.25s", display: "inline-block",
        }}>
          ▾
        </span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "500px" : "0",
        opacity: open ? 1 : 0,
        transition: "max-height 0.3s ease, opacity 0.25s ease",
        paddingBottom: open ? "16px" : "0",
      }}>
        {children}
      </div>
    </div>
  );
}

/* ── main footer ─────────────────────────────────────────────────────────── */
export default function Footer() {
  const [hovPrivacy, setHovPrivacy] = useState(false);
  const isMobile = useIsMobile();

  return (
    <footer style={{ background: "#030b18", padding: isMobile ? "50px 6% 36px" : "80px 5% 40px" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>

        {/* ── Top grid ─────────────────────────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1.5fr 2fr",
          gap: isMobile ? "0" : "90px",
          paddingBottom: "50px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          marginBottom: "32px",
        }}>

          {/* ── Brand + newsletter ──────────────────────────────────────── */}
          <div style={{ marginBottom: isMobile ? "32px" : 0 }}>

            {/* logo */}
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "9px",
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 900,
                color: "#0b1e3d", fontSize: "1.1rem", flexShrink: 0,
              }}>F</div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 900, color: "#fff" }}>
                inlorax<span style={{ color: "#c9a84c" }}>Associates</span>
              </span>
            </a>

            <p style={{
              fontSize: "0.87rem", textAlign: "justify",
              color: "rgba(255,255,255,0.45)", lineHeight: "1.8",
              maxWidth: isMobile ? "100%" : "270px",
              marginBottom: "24px",
            }}>
              We simplify complex tax and compliance processes through expert-driven services in
              Income Tax, GST, accounting, and business registration—helping you focus on growth
              while we handle the rest.
            </p>

            {/* newsletter */}
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1, padding: "11px 16px",
                  borderRadius: "8px 0 0 8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff", fontSize: "0.84rem", outline: "none",
                  fontFamily: "'Outfit', sans-serif", minWidth: 0,
                }}
              />
              <button style={{
                padding: "11px 18px", borderRadius: "0 8px 8px 0",
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                color: "#0b1e3d", border: "none", cursor: "pointer",
                fontWeight: 700, fontSize: "0.84rem", whiteSpace: "nowrap",
              }}>
                Subscribe
              </button>
            </div>
          </div>

          {/* ── Quick Links ─────────────────────────────────────────────── */}
          <AccordionSection title="Quick Links" isMobile={isMobile}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", margin: 0, padding: 0 }}>
              {QUICK_LINKS.map((item) => <FooterLink key={item}>{item}</FooterLink>)}
            </ul>
          </AccordionSection>

          {/* ── Services ────────────────────────────────────────────────── */}
          <AccordionSection title="Services" isMobile={isMobile}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", margin: 0, padding: 0 }}>
              {FOOTER_SERVICES.map((item) => <FooterLink key={item}>{item}</FooterLink>)}
            </ul>
          </AccordionSection>

          {/* ── Contact ─────────────────────────────────────────────────── */}
          <AccordionSection title="Get In Touch" isMobile={isMobile}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {CONTACT_INFO.map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c9a84c", fontSize: "0.95rem", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", lineHeight: "1.7" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* ── Developed by ─────────────────────────────────────────────── */}
          <div style={{ marginTop: isMobile ? "24px" : 0 }}>
            {isMobile ? (
              /* mobile: inline horizontal layout */
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                  developed by
                </span>
                <img src="Logo_zl.png" alt="company logo" style={{ height: "36px", width: "auto" }} />
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.05rem" }}>
                  developed by
                </span>
                <img src="Logo_zl.png" alt="company logo" style={{ height: "60px", width: "100px" }} />
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: "10px",
        }}>
          <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}>
            © 2025{" "}
            <a href="#" style={{ color: "#c9a84c", textDecoration: "none" }}>Finlorax.in</a>
            . All Rights Reserved.
          </span>
          <a
            href="#"
            style={{
              fontSize: "0.82rem",
              color: hovPrivacy ? "#c9a84c" : "rgba(255,255,255,0.3)",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={() => setHovPrivacy(true)}
            onMouseLeave={() => setHovPrivacy(false)}
          >
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  );
}