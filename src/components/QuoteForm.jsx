import { useState, useEffect } from "react";
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

const SERVICE_OPTIONS = [
  "Registrations",
  "Trademark & IPR",
  "Goods & Services Tax",
  "Income Tax",
  "Compliance",
  "Consultation",
];

const CONTACT_ITEMS = [
  { icon: "📍", text: "" },
  { icon: "📞", text: "9597927469" },
  { icon: "✉️", text: "finloraxassociates@gmail.com" },
];

/** Minimal styled input / textarea with gold focus ring */
function Field({ label, children, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? "12px" : "16px" }}>
      <label style={{
        display: "block", fontSize: isMobile ? "0.75rem" : "0.8rem", fontWeight: 600,
        color: "#0b1e3d", marginBottom: "6px", letterSpacing: "0.03em",
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputBase = {
  width: "100%", padding: "13px 16px",
  border: "1.5px solid rgba(11,30,61,0.1)", borderRadius: "10px",
  fontSize: "0.9rem", color: "#2c3e50", background: "#f7f4ee",
  outline: "none", fontFamily: "'Outfit', sans-serif",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
};

function focusStyle(e) {
  e.target.style.borderColor = "#c9a84c";
  e.target.style.boxShadow   = "0 0 0 3px rgba(201,168,76,0.15)";
  e.target.style.background  = "#fff";
}
function blurStyle(e) {
  e.target.style.borderColor = "rgba(11,30,61,0.1)";
  e.target.style.boxShadow   = "none";
  e.target.style.background  = "#f7f4ee";
}

export default function QuoteForm() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="quote" style={{ padding: isMobile ? "60px 5%" : "110px 5%", background: "#f7f4ee" }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "grid", 
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "40px" : "80px", 
        alignItems: isMobile ? "flex-start" : "center",
      }}>

        {/* ── Left info ── */}
        <div className="reveal" style={{ order: isMobile ? 2 : 1 }}>
          <SectionLabel label="Get a Quote" />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(1.5rem, 5vw, 2rem)" : "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700, color: "#0b1e3d",
            lineHeight: 1.2, marginBottom: isMobile ? "16px" : "20px",
          }}>
            Let's discuss your<br />
            <span style={{
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              tax needs
            </span>
          </h2>
          <p style={{
            color: "#6b7a90", lineHeight: "1.8", marginBottom: isMobile ? "24px" : "36px",
            fontSize: isMobile ? "0.9rem" : "0.97rem"
          }}>
            Fill out the form and our tax experts will contact you at your preferred time to provide personalized assistance.
          </p>

          {CONTACT_ITEMS.map((item) => (
            <div key={item.text} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px" }}>
              <div style={{
                width: isMobile ? "34px" : "38px",
                height: isMobile ? "34px" : "38px",
                borderRadius: "10px",
                background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: isMobile ? "0.9rem" : "1rem", flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <span style={{
                color: "#2c3e50", fontSize: isMobile ? "0.85rem" : "0.9rem",
                lineHeight: "1.7", paddingTop: isMobile ? "4px" : "8px"
              }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* ── Form card ── */}
        <div className="reveal" style={{
          background: "#fff", borderRadius: "24px", padding: isMobile ? "32px 20px" : "48px 40px",
          boxShadow: "0 24px 70px rgba(11,30,61,0.1)",
          border: "1px solid rgba(11,30,61,0.06)",
          order: isMobile ? 1 : 2,
        }}>

          {/* Two-column row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "0" : "16px",
            marginBottom: "0"
          }}>
            <Field label="Full Name" isMobile={isMobile}>
              <input
                type="text" placeholder="Your full name"
                value={formData.name} onChange={set("name")}
                style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
              />
            </Field>
            <Field label="Phone Number" isMobile={isMobile}>
              <input
                type="tel" placeholder="+91 XXXXX XXXXX"
                value={formData.phone} onChange={set("phone")}
                style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
              />
            </Field>
          </div>

          <Field label="Email Address" isMobile={isMobile}>
            <input
              type="email" placeholder="you@example.com"
              value={formData.email} onChange={set("email")}
              style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
            />
          </Field>

          <Field label="Select Service" isMobile={isMobile}>
            <select
              value={formData.service} onChange={set("service")}
              style={{ ...inputBase, cursor: "pointer" }}
              onFocus={focusStyle} onBlur={blurStyle}
            >
              <option value="" disabled>Choose a service</option>
              {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>

          <Field label="Message (Optional)" isMobile={isMobile}>
            <textarea
              placeholder="Tell us about your requirements..."
              rows={isMobile ? 3 : 4}
              value={formData.message} onChange={set("message")}
              style={{ ...inputBase, resize: "vertical", fontSize: isMobile ? "0.85rem" : "0.9rem" }}
              onFocus={focusStyle} onBlur={blurStyle}
            />
          </Field>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%", padding: isMobile ? "14px" : "15px",
              background: submitted
                ? "linear-gradient(135deg, #2ecc71, #27ae60)"
                : "linear-gradient(135deg, #c9a84c, #a07830)",
              color: submitted ? "#fff" : "#0b1e3d",
              border: "none", borderRadius: "10px", cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1rem", fontWeight: 700, letterSpacing: "0.04em",
              boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
              transition: "transform 0.2s, background 0.5s, box-shadow 0.2s",
              marginTop: isMobile ? "4px" : "8px",
            }}
            onMouseEnter={(e) => { if (!isMobile) { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 10px 36px rgba(201,168,76,0.5)"; } }}
            onMouseLeave={(e) => { if (!isMobile) { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 24px rgba(201,168,76,0.4)"; } }}
          >
            {submitted ? "✓ Enquiry Sent!" : "Submit Enquiry →"}
          </button>
        </div>
      </div>
    </section>
  );
}
