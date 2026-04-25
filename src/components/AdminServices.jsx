import { useState, useEffect, useCallback } from "react";
import api from "../api/api";

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────────────────── */
const ACCENT   = "#c9a84c";
const NAVY     = "#0b1e3d";
const CARD_BG  = "#fff";
const BORDER   = "#e8e4d8";
const DANGER   = "#e74c3c";
const SUCCESS  = "#27ae60";

const EMOJI_OPTIONS = ["💰","📊","🏦","📋","🏢","⚖️","📈","🔒","💼","🧾","🪙","📝","🏛️","🔑","💡"];

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────────── */
function emptyItemDetail() {
  return { photo: "", photoAlt: "", badge: "", heading: "", subheading: "", intro: "", cta: "", sections: [] };
}

function emptySection() {
  return { heading: "", subheading: "", items: [] };
}

function emptyItem() {
  return { item: "", itemDetail: null };   // itemDetail = null means "no detail page"
}

/** Convert API response into mutable form state */
function apiToForm(svc) {
  return {
    icon:        svc.icon        || "💰",
    title:       svc.title       || "",
    desc:        svc.desc        || "",
    detailIntro: svc.details?.intro || "",
    accentColor: svc.accentColor || "#c9a84c",
    bgGradient:  svc.bgGradient  || "linear-gradient(135deg, #0b1e3d 0%, #122648 100%)",
    sortOrder:   svc.sortOrder   ?? 0,
    active:      svc.active      !== false,
    sections: (svc.details?.sections || []).map((sec) => ({
      heading:    sec.heading    || "",
      subheading: sec.subheading || "",
      items: (sec.items || []).map((it) => ({
  item: typeof it === "string" ? it : it.item,
  itemDetail: typeof it === "object" ? it.itemDetail || null : null,
})),
    })),
  };
}

/** Convert form state into API payload */
function formToPayload(form) {
  return {
    icon:        form.icon,
    title:       form.title,
    desc:        form.desc,
    detailIntro: form.detailIntro,
    accentColor: form.accentColor,
    bgGradient:  form.bgGradient,
    sortOrder:   Number(form.sortOrder),
    active:      form.active,
    sections: form.sections.map((sec) => ({
      heading:    sec.heading,
      subheading: sec.subheading || undefined,
      items: sec.items.map((it) => ({
        item:       it.item,
        itemDetail: it.itemDetail || undefined,
      })),
    })),
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   SMALL UI PRIMITIVES
───────────────────────────────────────────────────────────────────────────── */
function Label({ children }) {
  return (
    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700,
      color: "#666", letterSpacing: "0.08em", marginBottom: "6px", textTransform: "uppercase" }}>
      {children}
    </label>
  );
}

function Input({ value, onChange, placeholder, type = "text", style = {} }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%", boxSizing: "border-box",
        padding: "9px 12px", borderRadius: "8px",
        border: `1.5px solid ${BORDER}`,
        fontSize: "0.88rem", color: "#1a1a1a",
        outline: "none", background: "#fafaf8",
        transition: "border-color 0.2s",
        ...style,
      }}
      onFocus={e  => e.target.style.borderColor = ACCENT}
      onBlur={e   => e.target.style.borderColor = BORDER}
    />
  );
}

function Textarea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%", boxSizing: "border-box",
        padding: "9px 12px", borderRadius: "8px",
        border: `1.5px solid ${BORDER}`,
        fontSize: "0.88rem", color: "#1a1a1a",
        outline: "none", resize: "vertical",
        background: "#fafaf8", fontFamily: "inherit",
        transition: "border-color 0.2s",
      }}
      onFocus={e => e.target.style.borderColor = ACCENT}
      onBlur={e  => e.target.style.borderColor = BORDER}
    />
  );
}

function Btn({ children, onClick, variant = "primary", size = "md", disabled = false, style = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: "6px",
    border: "none", borderRadius: "8px", cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: 700, letterSpacing: "0.03em", transition: "all 0.18s",
    opacity: disabled ? 0.5 : 1,
    padding: size === "sm" ? "6px 12px" : size === "lg" ? "12px 28px" : "9px 18px",
    fontSize: size === "sm" ? "0.78rem" : "0.88rem",
  };
  const variants = {
    primary:   { background: ACCENT,   color: NAVY },
    danger:    { background: DANGER,   color: "#fff" },
    secondary: { background: "#f0ede6", color: NAVY },
    ghost:     { background: "transparent", color: ACCENT, border: `1.5px solid ${ACCENT}44` },
    success:   { background: SUCCESS,  color: "#fff" },
  };
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.filter = "brightness(1.1)"; }}
      onMouseLeave={e => e.currentTarget.style.filter = "none"}
    >
      {children}
    </button>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <div
      onClick={() => onChange(!checked)}
      style={{
        width: "44px", height: "24px", borderRadius: "12px",
        background: checked ? SUCCESS : "#ccc",
        position: "relative", cursor: "pointer",
        transition: "background 0.25s", flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute",
        top: "3px", left: checked ? "23px" : "3px",
        width: "18px", height: "18px", borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        transition: "left 0.25s",
      }} />
    </div>
  );
}

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed", bottom: "24px", right: "24px", zIndex: 9999,
      background: type === "error" ? DANGER : SUCCESS,
      color: "#fff", padding: "12px 20px", borderRadius: "10px",
      fontSize: "0.88rem", fontWeight: 600,
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      display: "flex", alignItems: "center", gap: "10px",
      animation: "slideInToast 0.3s ease",
    }}>
      {type === "error" ? "✕" : "✓"} {message}
      <span onClick={onClose} style={{ cursor: "pointer", opacity: 0.7, marginLeft: "8px" }}>×</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ITEM DETAIL SUB-FORM
   Rendered inside the section-items editor as an inline expandable panel.
───────────────────────────────────────────────────────────────────────────── */
function ItemDetailForm({ detail, onChange }) {
  const d = detail || emptyItemDetail();

  const updateField = (key, val) => onChange({ ...d, [key]: val });

  const updateDetSec = (si, key, val) => {
    const secs = [...(d.sections || [])];
    secs[si] = { ...secs[si], [key]: val };
    onChange({ ...d, sections: secs });
  };

  const addDetSec = () => onChange({ ...d, sections: [...(d.sections || []), { heading: "", body: "", items: [] }] });
  const removeDetSec = (si) => onChange({ ...d, sections: d.sections.filter((_, i) => i !== si) });

  const updateDetSecItem = (si, ii, val) => {
    const secs = [...d.sections];
    const its  = [...(secs[si].items || [])];
    its[ii]    = val;
    secs[si]   = { ...secs[si], items: its };
    onChange({ ...d, sections: secs });
  };

  const addDetSecItem    = (si) => {
    const secs = [...d.sections];
    secs[si]   = { ...secs[si], items: [...(secs[si].items || []), ""] };
    onChange({ ...d, sections: secs });
  };
  const removeDetSecItem = (si, ii) => {
    const secs = [...d.sections];
    secs[si]   = { ...secs[si], items: secs[si].items.filter((_, i) => i !== ii) };
    onChange({ ...d, sections: secs });
  };

  const panelStyle = {
    background: "#f9f7f3", border: `1.5px solid ${ACCENT}44`,
    borderRadius: "10px", padding: "16px", marginTop: "8px",
  };

  return (
    <div style={panelStyle}>
      <p style={{ fontSize: "0.72rem", fontWeight: 800, color: ACCENT,
        letterSpacing: "0.12em", marginBottom: "14px", textTransform: "uppercase" }}>
        ✦ Item Detail Page
      </p>

      {/* Two-col row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
        <div>
          <Label>Photo URL</Label>
          <Input value={d.photo} onChange={e => updateField("photo", e.target.value)} placeholder="https://..." />
        </div>
        <div>
          <Label>Photo Alt Text</Label>
          <Input value={d.photoAlt} onChange={e => updateField("photoAlt", e.target.value)} placeholder="Describe image..." />
        </div>
        <div>
          <Label>Badge Text</Label>
          <Input value={d.badge} onChange={e => updateField("badge", e.target.value)} placeholder="e.g. Income Tax Filing" />
        </div>
        <div>
          <Label>Heading</Label>
          <Input value={d.heading} onChange={e => updateField("heading", e.target.value)} placeholder="Page heading" />
        </div>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Label>Subheading</Label>
        <Input value={d.subheading} onChange={e => updateField("subheading", e.target.value)} placeholder="Supporting tagline" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Label>Intro Paragraph</Label>
        <Textarea value={d.intro} onChange={e => updateField("intro", e.target.value)} placeholder="Introductory text..." rows={2} />
      </div>
      <div style={{ marginBottom: "14px" }}>
        <Label>CTA Text</Label>
        <Input value={d.cta} onChange={e => updateField("cta", e.target.value)} placeholder="e.g. Get your ITR filed today..." />
      </div>

      {/* Detail sections */}
      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#666", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Detail Sections
          </span>
          <Btn size="sm" variant="ghost" onClick={addDetSec}>+ Add Section</Btn>
        </div>

        {(d.sections || []).map((sec, si) => (
          <div key={si} style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "12px", marginBottom: "8px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <div style={{ flex: 1 }}>
                <Input value={sec.heading} onChange={e => updateDetSec(si, "heading", e.target.value)} placeholder="Section heading" />
              </div>
              <Btn size="sm" variant="danger" onClick={() => removeDetSec(si)}>✕</Btn>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <Textarea value={sec.body || ""} onChange={e => updateDetSec(si, "body", e.target.value)} placeholder="Optional body text..." rows={1} />
            </div>
            {/* Section bullet items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {(sec.items || []).map((itm, ii) => (
                <div key={ii} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ color: ACCENT, fontSize: "0.75rem", flexShrink: 0 }}>•</span>
                  <Input
                    value={itm}
                    onChange={e => updateDetSecItem(si, ii, e.target.value)}
                    placeholder={`Bullet item ${ii + 1}`}
                    style={{ padding: "7px 10px", fontSize: "0.82rem" }}
                  />
                  <button
                    onClick={() => removeDetSecItem(si, ii)}
                    style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: "1rem", flexShrink: 0 }}>
                    ×
                  </button>
                </div>
              ))}
              <Btn size="sm" variant="secondary" onClick={() => addDetSecItem(si)} style={{ alignSelf: "flex-start", marginTop: "2px" }}>
                + Bullet
              </Btn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE FORM MODAL
───────────────────────────────────────────────────────────────────────────── */
function ServiceFormModal({ service, onSave, onClose }) {
  const isEdit = !!service?.id;

  const [form, setForm]         = useState(() => service ? apiToForm(service) : {
    icon: "💰", title: "", desc: "", detailIntro: "",
    accentColor: "#c9a84c",
    bgGradient:  "linear-gradient(135deg, #0b1e3d 0%, #122648 100%)",
    sortOrder: 0, active: true, sections: [],
  });
  const [tab,      setTab]      = useState("basic");   // "basic" | "sections"
  const [saving,   setSaving]   = useState(false);
  const [errors,   setErrors]   = useState({});

  // Track which items have their detail form expanded
  const [expandedItems, setExpandedItems] = useState({}); // "secIdx-itemIdx" → bool

  const toggleItemDetail = (key) => setExpandedItems(p => ({ ...p, [key]: !p[key] }));

  /* ── field helpers ─────────────────────────────────────────────────────── */
  const setField = (key, val) => setForm(f => ({ ...f, [key]: val }));

  // Sections
  const addSection    = () => setForm(f => ({ ...f, sections: [...f.sections, emptySection()] }));
  const removeSection = (si) => setForm(f => ({ ...f, sections: f.sections.filter((_,i) => i !== si) }));
  const updateSection = (si, key, val) => setForm(f => {
    const secs = [...f.sections];
    secs[si]   = { ...secs[si], [key]: val };
    return { ...f, sections: secs };
  });

  // Items inside a section
  const addItem    = (si) => setForm(f => {
    const secs    = [...f.sections];
    secs[si]      = { ...secs[si], items: [...secs[si].items, emptyItem()] };
    return { ...f, sections: secs };
  });
  const removeItem = (si, ii) => setForm(f => {
    const secs  = [...f.sections];
    secs[si]    = { ...secs[si], items: secs[si].items.filter((_,i) => i !== ii) };
    return { ...f, sections: secs };
  });
  const updateItem = (si, ii, key, val) => setForm(f => {
    const secs  = [...f.sections];
    const items = [...secs[si].items];
    items[ii]   = { ...items[ii], [key]: val };
    secs[si]    = { ...secs[si], items };
    return { ...f, sections: secs };
  });
  const toggleItemDetailEnabled = (si, ii) => {
    const existing = form.sections[si].items[ii].itemDetail;
    updateItem(si, ii, "itemDetail", existing ? null : emptyItemDetail());
  };

  /* ── validation ────────────────────────────────────────────────────────── */
  const validate = () => {
    const e = {};
    if (!form.icon.trim())  e.icon  = "Required";
    if (!form.title.trim()) e.title = "Required";
    if (!form.desc.trim())  e.desc  = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ── submit ────────────────────────────────────────────────────────────── */
  const handleSave = async () => {
    if (!validate()) { setTab("basic"); return; }
    setSaving(true);
    try {
      const payload = formToPayload(form);
      if (isEdit) {
        await api.put(`/services/${service.id}`, payload);
      } else {
        await api.post("/services", payload);
      }
      onSave(isEdit ? "Service updated" : "Service created");
    } catch (err) {
      onSave(null, err.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  /* ── styles ────────────────────────────────────────────────────────────── */
  const overlay = {
    position: "fixed", inset: 0, background: "rgba(11,30,61,0.65)",
    backdropFilter: "blur(4px)", zIndex: 1000,
    display: "flex", alignItems: "flex-start", justifyContent: "flex-end",
  };
  const panel = {
    width: "min(700px, 100vw)", height: "100vh",
    background: CARD_BG, overflowY: "auto",
    boxShadow: "-8px 0 48px rgba(0,0,0,0.18)",
    display: "flex", flexDirection: "column",
  };

  const tabBtn = (t, label) => (
    <button
      onClick={() => setTab(t)}
      style={{
        padding: "10px 20px", border: "none", cursor: "pointer",
        background: tab === t ? ACCENT : "transparent",
        color: tab === t ? NAVY : "#888",
        fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.06em",
        textTransform: "uppercase",
        borderBottom: tab === t ? `2px solid ${ACCENT}` : "2px solid transparent",
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={panel}>

        {/* Header */}
        <div style={{ padding: "20px 28px", borderBottom: `1px solid ${BORDER}`,
          background: NAVY, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ color: `${ACCENT}`, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "2px" }}>
              {isEdit ? "EDITING SERVICE" : "NEW SERVICE"}
            </p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>
              {isEdit ? form.title || "Untitled" : "Create Service"}
            </h3>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none",
            color: "#fff", width: "34px", height: "34px", borderRadius: "50%",
            cursor: "pointer", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: `1px solid ${BORDER}`, background: "#fafaf8" }}>
          {tabBtn("basic",    "① Basic Info")}
          {tabBtn("sections", "② Sections & Items")}
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: "28px", overflowY: "auto" }}>

          {/* ── TAB 1: BASIC ───────────────────────────────────────────── */}
          {tab === "basic" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

              {/* Icon picker */}
              <div>
                <Label>Icon (Emoji)</Label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  {EMOJI_OPTIONS.map(em => (
                    <button
                      key={em}
                      onClick={() => setField("icon", em)}
                      style={{
                        width: "38px", height: "38px", borderRadius: "8px", border: "2px solid",
                        borderColor: form.icon === em ? ACCENT : BORDER,
                        background: form.icon === em ? `${ACCENT}18` : "#fff",
                        cursor: "pointer", fontSize: "1.2rem", display: "flex",
                        alignItems: "center", justifyContent: "center",
                      }}
                    >
                      {em}
                    </button>
                  ))}
                  {/* Custom emoji input */}
                  <input
                    value={EMOJI_OPTIONS.includes(form.icon) ? "" : form.icon}
                    onChange={e => setField("icon", e.target.value)}
                    placeholder="Other"
                    style={{ width: "60px", textAlign: "center", fontSize: "1.1rem",
                      borderRadius: "8px", border: `2px solid ${BORDER}`, padding: "6px 4px" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px",
                  padding: "10px 14px", background: "#f5f3ee", borderRadius: "10px",
                  border: `1px solid ${BORDER}` }}>
                  <span style={{ fontSize: "1.8rem" }}>{form.icon}</span>
                  <span style={{ color: "#888", fontSize: "0.82rem" }}>Preview</span>
                </div>
                {errors.icon && <p style={{ color: DANGER, fontSize: "0.78rem", marginTop: "4px" }}>{errors.icon}</p>}
              </div>

              {/* Title */}
              <div>
                <Label>Service Title *</Label>
                <Input
                  value={form.title}
                  onChange={e => setField("title", e.target.value)}
                  placeholder="e.g. Income Tax Filing & Advisory Services"
                />
                {errors.title && <p style={{ color: DANGER, fontSize: "0.78rem", marginTop: "4px" }}>{errors.title}</p>}
              </div>

              {/* Description */}
              <div>
                <Label>Card Description *</Label>
                <Textarea
                  value={form.desc}
                  onChange={e => setField("desc", e.target.value)}
                  placeholder="Short description shown on the service card..."
                  rows={3}
                />
                {errors.desc && <p style={{ color: DANGER, fontSize: "0.78rem", marginTop: "4px" }}>{errors.desc}</p>}
              </div>

              {/* Detail Intro */}
              <div>
                <Label>Detail Page Intro Paragraph</Label>
                <Textarea
                  value={form.detailIntro}
                  onChange={e => setField("detailIntro", e.target.value)}
                  placeholder="Shown at the top of the full service detail page..."
                  rows={4}
                />
              </div>

              {/* Colors */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <Label>Accent Color</Label>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <input
                      type="color"
                      value={form.accentColor}
                      onChange={e => setField("accentColor", e.target.value)}
                      style={{ width: "40px", height: "36px", borderRadius: "8px",
                        border: `1.5px solid ${BORDER}`, cursor: "pointer", padding: "2px" }}
                    />
                    <Input
                      value={form.accentColor}
                      onChange={e => setField("accentColor", e.target.value)}
                      placeholder="#c9a84c"
                    />
                  </div>
                </div>
                <div>
                  <Label>Sort Order</Label>
                  <Input
                    type="number"
                    value={form.sortOrder}
                    onChange={e => setField("sortOrder", e.target.value)}
                    placeholder="0"
                  />
                </div>
              </div>

              {/* BG Gradient */}
              <div>
                <Label>Card Background Gradient</Label>
                <Input
                  value={form.bgGradient}
                  onChange={e => setField("bgGradient", e.target.value)}
                  placeholder="linear-gradient(135deg, #0b1e3d 0%, #122648 100%)"
                />
                <div style={{ marginTop: "8px", height: "28px", borderRadius: "8px",
                  background: form.bgGradient, border: `1px solid ${BORDER}` }} />
              </div>

              {/* Active toggle */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 16px", background: "#f5f3ee", borderRadius: "10px",
                border: `1px solid ${BORDER}` }}>
                <div>
                  <p style={{ fontWeight: 700, color: NAVY, margin: 0, fontSize: "0.88rem" }}>Active / Visible</p>
                  <p style={{ color: "#888", margin: 0, fontSize: "0.78rem" }}>Show this service on the public site</p>
                </div>
                <Toggle checked={form.active} onChange={v => setField("active", v)} />
              </div>
            </div>
          )}

          {/* ── TAB 2: SECTIONS ────────────────────────────────────────── */}
          {tab === "sections" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <p style={{ fontWeight: 700, color: NAVY, margin: 0 }}>
                  Service Sections <span style={{ color: "#aaa", fontWeight: 400 }}>({form.sections.length})</span>
                </p>
                <Btn variant="primary" size="sm" onClick={addSection}>+ Add Section</Btn>
              </div>

              {form.sections.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px", color: "#aaa",
                  border: `2px dashed ${BORDER}`, borderRadius: "12px" }}>
                  <p style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📋</p>
                  <p>No sections yet. Click "+ Add Section" to start.</p>
                </div>
              )}

              {form.sections.map((sec, si) => (
                <div key={si} style={{
                  background: "#fafaf8", border: `1.5px solid ${BORDER}`,
                  borderRadius: "12px", padding: "18px", marginBottom: "16px",
                }}>
                  {/* Section header */}
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                      <Input
                        value={sec.heading}
                        onChange={e => updateSection(si, "heading", e.target.value)}
                        placeholder={`Section ${si + 1} heading`}
                      />
                      <Input
                        value={sec.subheading}
                        onChange={e => updateSection(si, "subheading", e.target.value)}
                        placeholder="Subheading (optional)"
                        style={{ fontSize: "0.82rem" }}
                      />
                    </div>
                    <Btn size="sm" variant="danger" onClick={() => removeSection(si)}>✕ Remove</Btn>
                  </div>

                  {/* Items */}
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#888",
                        textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Items ({sec.items.length})
                      </span>
                      <Btn size="sm" variant="ghost" onClick={() => addItem(si)}>+ Add Item</Btn>
                    </div>

                    {sec.items.map((itObj, ii) => {
                      const detailKey = `${si}-${ii}`;
                      const expanded  = expandedItems[detailKey];

                      return (
                        <div key={ii} style={{
                          background: "#fff", border: `1px solid ${BORDER}`,
                          borderRadius: "10px", padding: "12px", marginBottom: "8px",
                        }}>
                          {/* Item row */}
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>•</span>
                            <Input
  value={typeof itObj.item === "string" ? itObj.item : ""}
  onChange={e => updateItem(si, ii, "item", e.target.value)}
                              placeholder={`Item ${ii + 1} text`}
                              style={{ flex: 1 }}
                            />
                            {/* Toggle detail */}
                            <button
                              onClick={() => toggleItemDetailEnabled(si, ii)}
                              title={itObj.itemDetail ? "Remove detail page" : "Add detail page"}
                              style={{
                                padding: "6px 10px", borderRadius: "6px", border: `1.5px solid`,
                                borderColor: itObj.itemDetail ? ACCENT : BORDER,
                                background: itObj.itemDetail ? `${ACCENT}18` : "transparent",
                                color: itObj.itemDetail ? ACCENT : "#bbb",
                                cursor: "pointer", fontSize: "0.72rem", fontWeight: 700,
                                whiteSpace: "nowrap", flexShrink: 0,
                              }}
                            >
                              {itObj.itemDetail ? "✦ Detail ON" : "+ Detail"}
                            </button>
                            {/* Expand/collapse detail */}
                            {itObj.itemDetail && (
                              <button
                                onClick={() => toggleItemDetail(detailKey)}
                                style={{
                                  background: "none", border: "none", color: ACCENT,
                                  cursor: "pointer", fontSize: "0.8rem", flexShrink: 0,
                                  fontWeight: 700, padding: "4px 8px",
                                }}
                              >
                                {expanded ? "▲ Hide" : "▼ Edit"}
                              </button>
                            )}
                            <button
                              onClick={() => removeItem(si, ii)}
                              style={{ background: "none", border: "none", color: "#ccc",
                                cursor: "pointer", fontSize: "1.1rem", flexShrink: 0 }}>
                              ×
                            </button>
                          </div>

                          {/* Item detail sub-form */}
                          {itObj.itemDetail && expanded && (
  <ItemDetailForm
    detail={itObj.itemDetail}
    onChange={(updatedDetail) =>
      updateItem(si, ii, "itemDetail", updatedDetail)
    }
  />
)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div style={{ padding: "16px 28px", borderTop: `1px solid ${BORDER}`,
          background: "#fafaf8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Btn variant="secondary" onClick={onClose}>Cancel</Btn>
          <div style={{ display: "flex", gap: "10px" }}>
            {tab === "basic" && (
              <Btn variant="ghost" onClick={() => setTab("sections")}>
                Next: Sections →
              </Btn>
            )}
            <Btn variant="primary" onClick={handleSave} disabled={saving} size="lg">
              {saving ? "Saving…" : isEdit ? "💾 Save Changes" : "✦ Create Service"}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DELETE CONFIRMATION MODAL
───────────────────────────────────────────────────────────────────────────── */
function DeleteConfirm({ service, onConfirm, onClose }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await api.delete(`/services/${service.id}`);
      onConfirm("Service deleted");
    } catch (err) {
      onConfirm(null, err.response?.data?.message || "Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(11,30,61,0.7)",
      backdropFilter: "blur(4px)", zIndex: 1100,
      display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: "16px", padding: "32px",
        maxWidth: "420px", width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fde8e6",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.5rem", margin: "0 auto 16px" }}>🗑️</div>
        <h3 style={{ textAlign: "center", color: NAVY, marginBottom: "8px", fontSize: "1.1rem", fontWeight: 800 }}>
          Delete Service?
        </h3>
        <p style={{ textAlign: "center", color: "#666", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "24px" }}>
          This will permanently delete <strong>"{service.title}"</strong> and all its sections, items, and detail pages. This cannot be undone.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <Btn variant="secondary" onClick={onClose} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
          <Btn variant="danger" onClick={handleDelete} disabled={deleting} style={{ flex: 1, justifyContent: "center" }}>
            {deleting ? "Deleting…" : "Delete"}
          </Btn>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function AdminServices() {
  const [services,    setServices]    = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [formTarget,  setFormTarget]  = useState(null);   // null | "new" | service obj
  const [deleteTarget, setDeleteTarget] = useState(null); // null | service obj
  const [toast,       setToast]       = useState(null);   // { message, type }
  const [toggling,    setToggling]    = useState({});     // id → bool

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
  }, []);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get("/services/all");
      setServices(res.data.data || []);
    } catch (err) {
      showToast("Failed to load services", "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => { fetchServices(); }, [fetchServices]);

  const handleSaved = useCallback((successMsg, errorMsg) => {
    if (errorMsg) {
      showToast(errorMsg, "error");
    } else {
      showToast(successMsg, "success");
      setFormTarget(null);
      fetchServices();
    }
  }, [showToast, fetchServices]);

  const handleDeleted = useCallback((successMsg, errorMsg) => {
    if (errorMsg) {
      showToast(errorMsg, "error");
    } else {
      showToast(successMsg, "success");
      setDeleteTarget(null);
      fetchServices();
    }
  }, [showToast, fetchServices]);

  const handleToggle = useCallback(async (svc) => {
    setToggling(p => ({ ...p, [svc.id]: true }));
    try {
      await api.patch(`/services/${svc.id}/toggle`);
      fetchServices();
    } catch {
      showToast("Failed to toggle status", "error");
    } finally {
      setToggling(p => ({ ...p, [svc.id]: false }));
    }
  }, [fetchServices, showToast]);

  /* ── render ──────────────────────────────────────────────────────────── */
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
        <div>
          <h2 style={{ color: NAVY, margin: 0, fontSize: "1.5rem", fontWeight: 800 }}>Services</h2>
          <p style={{ color: "#888", margin: "4px 0 0", fontSize: "0.85rem" }}>
            {services.length} service{services.length !== 1 ? "s" : ""} · click any row to edit
          </p>
        </div>
        <Btn variant="primary" size="lg" onClick={() => setFormTarget("new")}>
          + New Service
        </Btn>
      </div>

      {/* ── Stats row ───────────────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
        {[
          { label: "Total",    val: services.length,                    icon: "📋" },
          { label: "Active",   val: services.filter(s => s.active).length, icon: "✅" },
          { label: "Hidden",   val: services.filter(s => !s.active).length, icon: "🙈" },
        ].map(({ label, val, icon }) => (
          <div key={label} style={{ background: CARD_BG, borderRadius: "12px",
            padding: "18px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "1.6rem" }}>{icon}</span>
            <div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: NAVY, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: "0.75rem", color: "#888", marginTop: "2px" }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Table card ──────────────────────────────────────────────────── */}
      <div style={{ background: CARD_BG, borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: `1px solid ${BORDER}`, overflow: "hidden" }}>

        {loading ? (
          <div style={{ padding: "60px", textAlign: "center", color: "#aaa" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>⏳</div>
            Loading services…
          </div>
        ) : services.length === 0 ? (
          <div style={{ padding: "60px", textAlign: "center", color: "#aaa" }}>
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📭</div>
            <p style={{ marginBottom: "16px" }}>No services yet.</p>
            <Btn variant="primary" onClick={() => setFormTarget("new")}>Create your first service</Btn>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f6f0", borderBottom: `1px solid ${BORDER}` }}>
                {["Service", "Sections", "Sort", "Status", "Actions"].map(h => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left",
                    fontSize: "0.72rem", fontWeight: 700, color: "#888",
                    textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((svc, i) => (
                <tr
                  key={svc.id}
                  style={{
                    borderBottom: i < services.length - 1 ? `1px solid ${BORDER}` : "none",
                    transition: "background 0.15s", cursor: "pointer",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafaf8"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  onClick={() => setFormTarget(svc)}
                >
                  {/* Service info */}
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                        background: svc.bgGradient || NAVY,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.2rem",
                        border: `1px solid ${svc.accentColor || ACCENT}44`,
                      }}>
                        {svc.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, color: NAVY, margin: 0, fontSize: "0.9rem" }}>
                          {svc.title}
                        </p>
                        <p style={{ color: "#999", margin: "2px 0 0", fontSize: "0.78rem",
                          maxWidth: "280px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Sections count */}
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ background: `${svc.accentColor || ACCENT}18`,
                      color: svc.accentColor || ACCENT,
                      padding: "3px 10px", borderRadius: "100px",
                      fontSize: "0.78rem", fontWeight: 700 }}>
                      {svc.details?.sections?.length || 0} sections
                    </span>
                  </td>

                  {/* Sort */}
                  <td style={{ padding: "14px 16px", color: "#888", fontSize: "0.85rem" }}>
                    #{svc.sortOrder ?? 0}
                  </td>

                  {/* Status toggle */}
                  <td style={{ padding: "14px 16px" }} onClick={e => e.stopPropagation()}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Toggle
                        checked={!!svc.active}
                        onChange={() => handleToggle(svc)}
                      />
                      <span style={{ fontSize: "0.78rem", color: svc.active ? SUCCESS : "#aaa", fontWeight: 600 }}>
                        {toggling[svc.id] ? "…" : svc.active ? "Active" : "Hidden"}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td style={{ padding: "14px 16px" }} onClick={e => e.stopPropagation()}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Btn size="sm" variant="secondary" onClick={() => setFormTarget(svc)}>✏️ Edit</Btn>
                      <Btn size="sm" variant="danger"    onClick={() => setDeleteTarget(svc)}>🗑️</Btn>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Modals ──────────────────────────────────────────────────────── */}
      {formTarget !== null && (
        <ServiceFormModal
          service={formTarget === "new" ? null : formTarget}
          onSave={handleSaved}
          onClose={() => setFormTarget(null)}
        />
      )}

      {deleteTarget && (
        <DeleteConfirm
          service={deleteTarget}
          onConfirm={handleDeleted}
          onClose={() => setDeleteTarget(null)}
        />
      )}

      {/* ── Toast ───────────────────────────────────────────────────────── */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}

      <style>{`
        @keyframes slideInToast {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}
