/**
 * PageBanner
 * ──────────
 * Full-width 500 px textured banner rendered directly below the navbar
 * whenever the user navigates away from Home.
 *
 * Shows:  Home  >>  [Page Name]
 */

const PAGE_META = {
  about: {
    title:    "About Us",
    subtitle: "5+ years of trusted tax expertise across Chennai",
    accent:   "linear-gradient(135deg, #0b2d5e 0%, #1a5096 55%, #0d3a7a 100%)",
  },
  services: {
    title:    "Our Services",
    subtitle: "Comprehensive tax & compliance solutions for every business size",
    accent:   "linear-gradient(135deg, #0b1e3d 0%, #0f2a52 55%, #0a1f40 100%)",
  },
  testimonials: {
    title:    "Testimonials",
    subtitle: "Hear what 10,000+ happy clients say about Finlorax Associates",
    accent:   "linear-gradient(135deg, #091828 0%, #0b1e3d 55%, #0d2550 100%)",
  },
  contact: {
    title:    "Contact Us",
    subtitle: "Our tax experts are just a message away — reach out today",
    accent:   "linear-gradient(135deg, #0a1830 0%, #0b2040 55%, #061020 100%)",
  },
};

const LABEL = { about: "About", services: "Services", testimonials: "Testimonials", contact: "Contact Us" };

export default function PageBanner({ page, onHome }) {
  const meta = PAGE_META[page] || PAGE_META.about;

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        // marginTop: "78px",          /* clear fixed navbar */
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  }}
>
  <source src="/changed_background.mp4" type="video/mp4" />
</video>
<div style={{
  position: "absolute",
  inset: 0,
  background: "rgba(4, 13, 31, 0.75)", // dark overlay
  zIndex: 1,
}} />

      {/* ── Texture: fine dot grid ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "radial-gradient(circle, rgba(201,168,76,0.18) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.55,
      }} />

      {/* ── Diagonal stripe overlay ── */}
      <div style={{
        position: "absolute", inset: 0,
        zIndex: 1,
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 38px,
          rgba(201,168,76,0.03) 38px,
          rgba(201,168,76,0.03) 40px
        )`,
      }} />

      {/* ── Gold grid lines ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
         zIndex: 2,
      }} />

      {/* ── Glow: top-right ── */}
      <div style={{
        position: "absolute",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 65%)",
        top: "-180px", right: "-120px",
        pointerEvents: "none",
         zIndex: 2,
      }} />

      {/* ── Glow: bottom-left ── */}
      <div style={{
        position: "absolute",
        width: "450px", height: "450px",
        background: "radial-gradient(circle, rgba(26,64,128,0.4) 0%, transparent 65%)",
        bottom: "-120px", left: "-80px",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* ── Rotating outer ring ── */}
      <div style={{
        position: "absolute",
        width: "380px", height: "380px",
        border: "1px dashed rgba(201,168,76,0.2)",
        borderRadius: "50%",
        top: "50%", right: "7%",
        transform: "translateY(-50%)",
        animation: "rotateBg 24s linear infinite",
         zIndex: 2,
      }} />
      {/* ── Rotating inner ring ── */}
      <div style={{
        position: "absolute",
        width: "240px", height: "240px",
        border: "1px dashed rgba(201,168,76,0.12)",
        borderRadius: "50%",
        top: "50%", right: "calc(7% + 70px)",
        transform: "translateY(-50%)",
        animation: "rotateBg 17s linear infinite reverse",
        zIndex: 2
      }} />

      {/* ── Floating particles ── */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left:              `${8 + i * 9}%`,
            top:               `${15 + (i % 5) * 16}%`,
            animationDelay:    `${i * 0.35}s`,
            animationDuration: `${3 + (i % 3)}s`,
            opacity:           0.35,
          }}
        />
      ))}

      {/* ── Centre content ── */}
      <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 5%" }}>

        {/* Breadcrumb pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.35)",
          color: "rgba(255,255,255,0.8)",
          padding: "7px 22px", borderRadius: "100px",
          fontSize: "0.78rem", fontWeight: 600,
          letterSpacing: "0.06em",
          marginBottom: "32px",
          animation: "borderGlow 3s ease-in-out infinite",
        }}>
          {/* Home crumb – clickable */}
          <span
            onClick={onHome}
            style={{
              color: "#c9a84c", cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Home
          </span>

          {/* Chevron */}
          <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "0.7rem" }}>❯❯</span>

          {/* Current page */}
          <span style={{ color: "#fff" }}>{LABEL[page] || page}</span>
        </div>

        {/* Page title */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 900, lineHeight: 1.05,
          color: "#fff", marginBottom: "20px",
        }}>
          {meta.title.split(" ").map((word, i, arr) =>
            i === arr.length - 1
              ? <span key={i} className="gold-text">{word}</span>
              : <span key={i}>{word} </span>
          )}
        </h1>

        {/* Subtitle */}
        <p style={{
          color: "rgba(255,255,255,0.58)",
          fontSize: "1.05rem", lineHeight: "1.75",
          maxWidth: "560px", margin: "0 auto",
        }}>
          {meta.subtitle}
        </p>

        {/* Gold decorative rule */}
        <div style={{
          width: "70px", height: "3px",
          background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          margin: "30px auto 0",
          borderRadius: "2px",
        }} />
      </div>

      {/* ── Bottom shadow fade ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "100px",
        background: "linear-gradient(to bottom, transparent, rgba(4,13,31,0.5))",
      }} />
    </div>
  );
}
