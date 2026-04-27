// src/components/AdminDashboard.jsx
import { useEffect, useState } from "react";
import api from "../api/api";

/* ── tiny hook: track viewport width ────────────────────────────────────── */
function useIsMobile(bp = 640) {
  const [mobile, setMobile] = useState(window.innerWidth < bp);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return mobile;
}

/* ── status pill ─────────────────────────────────────────────────────────── */
const STATUS_COLORS = {
  unread:  { bg: "#fff3cd", color: "#856404" },
  read:    { bg: "#d1ecf1", color: "#0c5460" },
  replied: { bg: "#d4edda", color: "#155724" },
};
function StatusPill({ status }) {
  const s = STATUS_COLORS[status] || { bg: "#eee", color: "#555" };
  return (
    <span style={{
      background: s.bg, color: s.color,
      padding: "3px 10px", borderRadius: "20px",
      fontSize: "0.75rem", fontWeight: 700,
      textTransform: "capitalize", whiteSpace: "nowrap",
    }}>
      {status}
    </span>
  );
}

/* ── stat card ───────────────────────────────────────────────────────────── */
function StatCard({ label, value, sub, icon }) {
  return (
    <div style={{
      background: "#fff",
      padding: "22px 24px",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
      borderLeft: "4px solid #c9a84c",
      display: "flex", alignItems: "center", gap: "16px",
    }}>
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px",
        background: "rgba(201,168,76,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {label}
        </div>
        <div style={{ fontSize: "2rem", fontWeight: 900, color: "#0b1e3d", lineHeight: 1.1 }}>
          {value}
        </div>
        {sub && <div style={{ fontSize: "0.78rem", color: "#999", marginTop: "2px" }}>{sub}</div>}
      </div>
    </div>
  );
}

/* ── main component ──────────────────────────────────────────────────────── */
export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    api.get("/dashboard")
      .then((res) => setStats(res.data.data))
      .catch((err) => {
        console.error("Dashboard error:", err);
        setError(err.response?.data?.message || "Failed to load dashboard");
        setStats({
          services: { active: 0, total: 0, hidden: 0 },
          testimonials: { total: 0 },
          queries: { total: 0, unread: 0, read: 0, replied: 0 },
          recentQueries: [],
        });
      });
  }, []);

  if (!stats) return (
    <div style={{ padding: "60px", textAlign: "center", color: "#0b1e3d" }}>
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>⏳</div>
      <div style={{ fontWeight: 600 }}>Loading dashboard…</div>
    </div>
  );

  return (
    <div style={{ padding: isMobile ? "16px" : "0" }}>

      {/* ── page title ─────────────────────────────────────────── */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{
          color: "#0b1e3d", margin: 0,
          fontSize: isMobile ? "1.4rem" : "1.8rem",
          fontWeight: 800,
        }}>
          Dashboard Overview
        </h1>
        <p style={{ color: "#888", margin: "4px 0 0", fontSize: "0.85rem" }}>
          Welcome back — here's what's happening.
        </p>
      </div>

      {/* ── error banner ───────────────────────────────────────── */}
      {error && (
        <div style={{
          background: "#fff0f0", color: "#c00",
          border: "1px solid #fcc", padding: "12px 16px",
          borderRadius: "10px", marginBottom: "20px",
          fontSize: "0.88rem", display: "flex", gap: "8px", alignItems: "center",
        }}>
          ⚠️ {error}
        </div>
      )}

      {/* ── stat cards ─────────────────────────────────────────── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginBottom: "36px",
      }}>
        <StatCard
          icon="🏢"
          label="Active Services"
          value={stats.services.active}
          sub={`Total: ${stats.services.total} • Hidden: ${stats.services.hidden ?? 0}`}
        />
        <StatCard
          icon="⭐"
          label="Testimonials"
          value={stats.testimonials.total}
        />
        <StatCard
          icon="📬"
          label="Contact Queries"
          value={stats.queries.total}
          sub={`Unread: ${stats.queries.unread} • Replied: ${stats.queries.replied}`}
        />
      </div>

      {/* ── recent queries ─────────────────────────────────────── */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        overflow: "hidden",
      }}>

        {/* section header */}
        <div style={{
          padding: isMobile ? "16px" : "18px 24px",
          borderBottom: "1px solid #f0f0f0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <h3 style={{ margin: 0, color: "#0b1e3d", fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 700 }}>
            Recent Contact Queries
          </h3>
          <span style={{
            background: "rgba(201,168,76,0.12)", color: "#a07830",
            fontSize: "0.75rem", fontWeight: 700,
            padding: "4px 10px", borderRadius: "20px",
          }}>
            Last 5
          </span>
        </div>

        {/* ── mobile: card list ─── */}
        {isMobile ? (
          <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {!stats.recentQueries?.length && (
              <div style={{ textAlign: "center", padding: "30px", color: "#aaa" }}>No queries yet</div>
            )}
            {stats.recentQueries?.map((q) => (
              <div key={q.id} style={{
                border: "1px solid #f0f0f0", borderRadius: "12px",
                padding: "14px 16px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ fontWeight: 700, color: "#0b1e3d", fontSize: "0.95rem" }}>{q.name}</div>
                  <StatusPill status={q.status} />
                </div>
                <div style={{ fontSize: "0.82rem", color: "#666", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span>📋 {q.service || "—"}</span>
                  <span>📅 {new Date(q.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── desktop: table ─── */
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#0b1e3d" }}>
                {["Name", "Service", "Status", "Date"].map((h) => (
                  <th key={h} style={{
                    padding: "14px 20px", textAlign: "left",
                    color: "#c9a84c", fontSize: "0.8rem",
                    fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!stats.recentQueries?.length && (
                <tr>
                  <td colSpan={4} style={{ padding: "30px", textAlign: "center", color: "#aaa" }}>
                    No queries yet
                  </td>
                </tr>
              )}
              {stats.recentQueries?.map((q, i) => (
                <tr key={q.id} style={{
                  borderBottom: "1px solid #f4f4f4",
                  background: i % 2 === 0 ? "#fff" : "#fafafa",
                  transition: "background 0.15s",
                }}>
                  <td style={{ padding: "14px 20px", fontWeight: 600, color: "#0b1e3d" }}>{q.name}</td>
                  <td style={{ padding: "14px 20px", color: "#555" }}>{q.service || "—"}</td>
                  <td style={{ padding: "14px 20px" }}><StatusPill status={q.status} /></td>
                  <td style={{ padding: "14px 20px", color: "#888", fontSize: "0.88rem" }}>
                    {new Date(q.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}