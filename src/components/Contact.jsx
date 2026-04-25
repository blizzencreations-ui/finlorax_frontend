import { useState } from "react";
import api from "../api/api";
import SectionLabel from "./SectionLabel";

const SERVICE_OPTIONS = [
  "Registrations",
  "Financial & Accounting Outsourcing",
  "Goods & Services Tax",
  "Income Tax",
  "Compliance & Advisory",
  "Loan Support Services",
  "Business Support Services",
  "Other Services",
];

const CONTACT_ITEMS = [
  { icon: "📍", label: "Address",   text: "1st Main St, Y Block, Anna Nagar, Chennai, Tamil Nadu 600040" },
  { icon: "📞", label: "Phone",     text: "9597927469" },
  { icon: "✉️", label: "Email",     text: "finloraxassociates@gmail.com" },
  { icon: "🕐", label: "Hours",     text: "Mon – Sat : 9:00 AM – 7:00 PM" },
];

const inputBase = {
  width: "100%",
  padding: "13px 16px",
  border: "1.5px solid rgba(11,30,61,0.1)",
  borderRadius: "10px",
  fontSize: "0.9rem",
  color: "#2c3e50",
  background: "#f0ede6",
  outline: "none",
  fontFamily: "'Outfit', sans-serif",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
};

const onFocus = (e) => {
  e.target.style.borderColor = "#c9a84c";
  e.target.style.boxShadow   = "0 0 0 3px rgba(201,168,76,0.15)";
  e.target.style.background  = "#fff";
};
const onBlur = (e) => {
  e.target.style.borderColor = "rgba(11,30,61,0.1)";
  e.target.style.boxShadow   = "none";
  e.target.style.background  = "#f0ede6";
};

export default function Contact() {
  const [form, setForm]           = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async () => {
    console.log("Button clicked!");
    
    if (!form.name || !form.email) {
      setError("Name and Email are required");
      console.log("Validation failed - missing name or email");
      return;
    }

    console.log("Validation passed, submitting...");
    setLoading(true);
    setError("");
    
    try {
      console.log("Form data:", form);
      console.log("API endpoint: /contact/submit");
      const response = await api.post("/contact/submit", form);
      console.log("Success:", response.data);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Full error object:", err);
      console.error("Error response:", err.response);
      const errorMsg = err.response?.data?.message || err.message || "Failed to send message";
      console.error("Error message shown to user:", errorMsg);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ padding: "90px 5% 80px", background: "#fff" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Section title ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel label="Get In Touch" center />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0b1e3d", marginBottom: "16px",
          }}>
            Let's discuss your{" "}
            <span style={{
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              tax needs
            </span>
          </h2>
          <p style={{ color: "#6b7a90", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: "1.8" }}>
            Fill out the form and our tax experts will contact you at your preferred time with personalised assistance.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.3fr",
          gap: "60px", alignItems: "start",
        }}>

          {/* Contact info cards */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex", gap: "18px", alignItems: "flex-start",
                  background: "#f7f4ee",
                  border: "1px solid rgba(11,30,61,0.07)",
                  borderRadius: "16px", padding: "22px 24px",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(201,168,76,0.12)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: "46px", height: "46px", flexShrink: 0,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #0b1e3d, #1a3a6e)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 14px rgba(11,30,61,0.2)",
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "4px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#2c3e50", lineHeight: "1.6" }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
           <div style={{
  borderRadius: "16px",
  overflow: "hidden",
  height: "220px",
  border: "1px solid rgba(201,168,76,0.15)",
}}>
  <iframe
    title="Anna Nagar Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2139612295928!2d80.21014897574067!3d13.08562211236683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526500531a313b%3A0xd55b6f4b2ed37998!2sBlizzen%20Creation&#39;s!5e0!3m2!1sen!2sin!4v1776753824556!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    style={{
      width: "100%",
      height: "100%",
      border: 0,
    }}
    loading="lazy"
  />
</div>
          </div>

          {/* Form card */}
          <div
            className="reveal"
            style={{
              background: "#fff",
              borderRadius: "24px", padding: "48px 44px",
              boxShadow: "0 24px 80px rgba(11,30,61,0.1)",
              border: "1px solid rgba(11,30,61,0.06)",
            }}
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem", fontWeight: 700,
              color: "#0b1e3d", marginBottom: "28px",
            }}>
              Send us a message
            </h3>

            {/* Row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              {[["Full Name","text","Your full name","name"],["Phone","tel","+91 XXXXX XXXXX","phone"]].map(([label,type,ph,key]) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0b1e3d", marginBottom: "7px", letterSpacing: "0.04em" }}>{label}</label>
                  <input type={type} placeholder={ph} value={form[key]} onChange={set(key)} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
              ))}
            </div>

            {[["Email Address","email","you@example.com","email"]].map(([label,type,ph,key]) => (
              <div key={key} style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0b1e3d", marginBottom: "7px", letterSpacing: "0.04em" }}>{label}</label>
                <input type={type} placeholder={ph} value={form[key]} onChange={set(key)} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
              </div>
            ))}

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0b1e3d", marginBottom: "7px", letterSpacing: "0.04em" }}>Select Service</label>
              <select value={form.service} onChange={set("service")} style={{ ...inputBase, cursor: "pointer" }} onFocus={onFocus} onBlur={onBlur}>
                <option value="" disabled>Choose a service</option>
                {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0b1e3d", marginBottom: "7px", letterSpacing: "0.04em" }}>Message (Optional)</label>
              <textarea
                placeholder="Tell us about your requirements…"
                rows={4} value={form.message} onChange={set("message")}
                style={{ ...inputBase, resize: "vertical" }}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>

            {error && <div style={{ color: "#e74c3c", fontSize: "0.9rem", marginBottom: "16px", textAlign: "center", background: "#ffe6e6", padding: "10px", borderRadius: "6px" }}>{error}</div>}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: "100%", padding: "15px",
                background: submitted
                  ? "linear-gradient(135deg, #2ecc71, #27ae60)"
                  : "linear-gradient(135deg, #c9a84c, #a07830)",
                color: submitted ? "#fff" : "#0b1e3d",
                border: "none", borderRadius: "10px", cursor: loading ? "not-allowed" : "pointer",
                fontSize: "1rem", fontWeight: 700, letterSpacing: "0.04em",
                boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
                transition: "transform 0.2s, background 0.5s, box-shadow 0.2s",
                opacity: loading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => { if (!loading) { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 10px 36px rgba(201,168,76,0.5)"; } }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 24px rgba(201,168,76,0.4)"; }}
            >
              {loading ? "Sending..." : submitted ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
