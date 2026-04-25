import { useRef } from "react";
import { useMouseTilt } from "../hooks/useMouseTilt";

export default function ServiceCard({ icon, title, desc, delay, accentColor = "#c9a84c", onReadMore }) {
  const ref = useRef(null);
  const { tilt, hovered, handleMove, handleLeave, handleEnter } = useMouseTilt(ref, 12);

  return (
    <div
      ref={ref}
      className="service-card reveal"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{ animationDelay: `${delay}ms`, perspective: "800px", cursor: "pointer", position: "relative" }}
    >
      <div style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? "10px" : "0"})`,
        transition: "transform 0.15s ease, box-shadow 0.3s",
        background: hovered
          ? "linear-gradient(135deg, #0f2347 0%, #1a3a6e 100%)"
          : "linear-gradient(135deg, #0b1e3d 0%, #122648 100%)",
        border: `1px solid ${hovered ? `${accentColor}99` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "20px",
        padding: "36px 28px",
        height: "300px",
        boxShadow: hovered
          ? `0 30px 80px ${accentColor}33, 0 0 0 1px ${accentColor}18`
          : "0 8px 32px rgba(0,0,0,0.4)",
        transformStyle: "preserve-3d",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Radial glow overlay */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "20px",
          background: `radial-gradient(circle at 50% 0%, ${accentColor}1e 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }} />

        {/* Icon */}
        <div style={{
          width: "62px", height: "62px", borderRadius: "16px",
          background: hovered ? `${accentColor}33` : `${accentColor}14`,
          border: `1px solid ${accentColor}4d`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.7rem", marginBottom: "20px",
          transform: hovered ? "translateZ(20px) scale(1.1)" : "translateZ(0) scale(1)",
          transition: "transform 0.3s, background 0.3s",
          boxShadow: hovered ? `0 8px 24px ${accentColor}4d` : "none",
          flexShrink: 0,
        }}>
          {icon}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem", fontWeight: 700,
          color: hovered ? accentColor : "#e8e4d8",
          marginBottom: "12px",
          transform: hovered ? "translateZ(15px)" : "translateZ(0)",
          transition: "transform 0.3s, color 0.3s",
          flexShrink: 0,
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: "0.87rem", color: "rgba(255,255,255,0.55)",
          lineHeight: "1.75", textAlign: "justify",
          transform: hovered ? "translateZ(10px)" : "translateZ(0)",
          transition: "transform 0.3s",
          flex: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}>
          {desc}
        </p>

        {/* Read More button */}
        <button
          onClick={(e) => { e.stopPropagation(); onReadMore?.(); }}
          style={{
            marginTop: "20px",
            display: "flex", alignItems: "center", gap: "6px",
            background: hovered ? `${accentColor}22` : "transparent",
            border: `1px solid ${hovered ? `${accentColor}88` : "transparent"}`,
            color: accentColor, fontSize: "0.82rem", fontWeight: 700,
            padding: hovered ? "8px 16px" : "8px 0",
            borderRadius: "100px", cursor: "pointer",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0) translateZ(15px)" : "translateX(-12px) translateZ(0)",
            transition: "opacity 0.3s, transform 0.3s, background 0.25s, padding 0.25s, border 0.25s",
            letterSpacing: "0.04em",
            alignSelf: "flex-start",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${accentColor}33`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `${accentColor}22`;
          }}
        >
          Read More <span style={{ fontSize: "0.9rem" }}>→</span>
        </button>
      </div>
    </div>
  );
}
