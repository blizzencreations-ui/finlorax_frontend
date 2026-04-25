import { useState } from "react";
import { QUICK_LINKS, FOOTER_SERVICES, CONTACT_INFO } from "../constants/data";

function FooterLink({ children }) {
  const [hov, setHov] = useState(false);
  return (
    <li>
      <a
        href="#"
        style={{
          color: hov ? "#c9a84c" : "rgba(255,255,255,0.45)",
          textDecoration: "none", fontSize: "0.85rem",
          transition: "color 0.2s",
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  const [hov, setHov] = useState(false);

  return (
    <footer style={{ background: "#030b18", padding: "80px 5% 40px" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>

        {/* ── Top grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr 2fr",
          gap: "90px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          marginBottom: "40px",
        }}>

          {/* Brand + newsletter */}
          <div>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", marginBottom: "20px" }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "9px",
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 900,
                color: "#0b1e3d", fontSize: "1.1rem",
              }}>F</div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 900, color: "#fff" }}>
                inlorax<span style={{ color: "#c9a84c" }}>Associates</span>
              </span>
            </a>

            <p style={{ fontSize: "0.87rem",textAlign:"Justify", color: "rgba(255,255,255,0.45)", lineHeight: "1.8", maxWidth: "270px", marginBottom: "28px" }}>
               we simplify complex tax and compliance processes through expert-driven services in Income Tax, GST, accounting, and business registration—helping you focus on growth while we handle the rest.
            </p>

            {/* Newsletter bar */}
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
                  fontFamily: "'Outfit', sans-serif",
                }}
              />
              <button style={{
                padding: "11px 18px", borderRadius: "0 8px 8px 0",
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                color: "#0b1e3d", border: "none", cursor: "pointer",
                fontWeight: 700, fontSize: "0.84rem",
              }}>
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.05rem", marginBottom: "20px", fontWeight: 700 }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {QUICK_LINKS.map((item) => <FooterLink key={item}>{item}</FooterLink>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.05rem", marginBottom: "20px", fontWeight: 700 }}>
              Services
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {FOOTER_SERVICES.map((item) => <FooterLink key={item}>{item}</FooterLink>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.05rem", marginBottom: "20px", fontWeight: 700 }}>
              Get In Touch
            </h5>
            {CONTACT_INFO.map((item) => (
              <div key={item.text} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.95rem", marginTop: "2px" }}>{item.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", lineHeight: "1.7" }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.05rem"}}>developed by</span>
          <img src="Logo_zl.png" alt="company logo" style={{ height: "60px", width: "100px" }} />
          </div>
        </div>
        </div>
        

        {/* ── Bottom bar ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}>
            © 2025{" "}
            <a href="#" style={{ color: "#c9a84c", textDecoration: "none" }}>Finlorax.in</a>
            . All Rights Reserved.
          </span>
          <a
            href="#"
            style={{ fontSize: "0.82rem", color: hov ? "#c9a84c" : "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
