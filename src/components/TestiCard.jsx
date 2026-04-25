import { useRef } from "react";
import { useMouseTilt } from "../hooks/useMouseTilt";

export default function TestiCard({ quote, name, role, initial, delay }) {
  const ref = useRef(null);
  const { tilt, hovered, handleMove, handleLeave, handleEnter } = useMouseTilt(ref, 8);

  return (
    <div
      ref={ref}
      className="reveal"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{ animationDelay: `${delay}ms`, perspective: "900px" }}
    >
      <div style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        background: hovered ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "20px", padding: "32px 28px",
        boxShadow: hovered ? "0 20px 60px rgba(201,168,76,0.15)" : "none",
        transition: "background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.15s ease",
      }}>
        {/* Stars */}
        <div style={{ color: "#c9a84c", fontSize: "1rem", letterSpacing: "2px", marginBottom: "18px" }}>
          ★★★★★
        </div>

        {/* Opening quote mark */}
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.8rem", color: "rgba(201,168,76,0.25)",
          lineHeight: 0.5, marginBottom: "10px",
        }}>
          "
        </div>

        {/* Quote */}
        <p style={{
          fontSize: "0.9rem", color: "rgba(255,255,255,0.72)",
          lineHeight: "1.8", marginBottom: "26px", fontStyle: "italic",
        }}>
          {quote}
        </p>

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: "48px", height: "48px", borderRadius: "50%",
            background: "linear-gradient(135deg, #c9a84c, #8b6420)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 900,
            color: "#0b1e3d", fontSize: "1.2rem", flexShrink: 0,
          }}>
            {initial}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#e8e4d8", fontSize: "0.9rem" }}>{name}</div>
            <div style={{ fontSize: "0.77rem", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
