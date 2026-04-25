// src/components/AdminDashboard.jsx
import { useEffect, useState } from "react";
import api from "../api/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/dashboard")
      .then((res) => setStats(res.data.data))
      .catch((err) => {
        console.error("Dashboard error:", err);
        setError(err.response?.data?.message || "Failed to load dashboard");
        // Set dummy data so page doesn't hang
        setStats({ services: { active: 0, total: 0 }, testimonials: { total: 0 }, queries: { total: 0 } });
      });
  }, []);

  if (!stats) return <div style={{ padding: "50px", textAlign: "center", color: "#0b1e3d" }}>Loading dashboard...</div>;

  return (
    <div>
      <h1 style={{ color: "#0b1e3d", marginBottom: "30px" }}>Dashboard Overview</h1>
      {error && <div style={{ background: "#fee", color: "#c00", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>{error}</div>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
        <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <h4>Services</h4>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#c9a84c" }}>{stats.services.active}</div>
          <small>Active • Total: {stats.services.total}</small>
        </div>
        <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <h4>Testimonials</h4>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#c9a84c" }}>{stats.testimonials.total}</div>
        </div>
        <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <h4>Contact Queries</h4>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#c9a84c" }}>{stats.queries.total}</div>
          <small>Unread: {stats.queries.unread}</small>
        </div>
      </div>

      {/* Recent Queries */}
      <h3 style={{ marginTop: "40px", marginBottom: "20px" }}>Recent Contact Queries</h3>
      <table style={{ width: "100%", background: "#fff", borderRadius: "12px", overflow: "hidden" }}>
        <thead>
          <tr style={{ background: "#0b1e3d", color: "#fff" }}>
            <th style={{ padding: "16px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "16px", textAlign: "left" }}>Service</th>
            <th style={{ padding: "16px", textAlign: "left" }}>Status</th>
            <th style={{ padding: "16px", textAlign: "left" }}>Date</th>
          </tr>
        </thead>
        <tbody>
            {stats.recentQueries?.map((q) => (
              <tr key={q.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "16px" }}>{q.name}</td>
                <td style={{ padding: "16px" }}>{q.service || "—"}</td>
                <td style={{ padding: "16px" }}>{q.status}</td>
                <td style={{ padding: "16px" }}>{new Date(q.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}