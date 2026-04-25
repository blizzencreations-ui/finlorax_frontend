/**
 * Reusable section label with gold bars on each side.
 * Props:
 *   label  – string (required)
 *   center – boolean (default false)
 *   light  – boolean (default false) – use white text colour for dark backgrounds
 */
export default function SectionLabel({ label, center = false, light = false }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      marginBottom: "16px",
      ...(center ? { justifyContent: "center", width: "100%" } : {}),
    }}>
      <div style={{ width: "30px", height: "2px", background: "#c9a84c" }} />
      <span style={{
        fontSize: "0.73rem", fontWeight: 700,
        letterSpacing: "0.12em", textTransform: "uppercase",
        color: "#c9a84c",
      }}>
        {label}
      </span>
      {center && <div style={{ width: "30px", height: "2px", background: "#c9a84c" }} />}
    </div>
  );
}
