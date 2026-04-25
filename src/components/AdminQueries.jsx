import { useState, useEffect } from "react";
import api from "../api/api";

export default function AdminQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [summary, setSummary] = useState(null);

  const fetchQueries = () => {
    const endpoint = filter === "all" ? "/contact/queries" : `/contact/queries?status=${filter}`;
    api.get(endpoint)
      .then((res) => setQueries(res.data.data || []))
      .catch((err) => console.error("Failed to load queries:", err))
      .finally(() => setLoading(false));
  };

  const fetchSummary = () => {
    api.get("/contact/queries/summary")
      .then((res) => setSummary(res.data.data))
      .catch((err) => console.error("Failed to load summary:", err));
  };

  useEffect(() => {
    fetchQueries();
    fetchSummary();
  }, [filter]);

  const handleViewQuery = (queryId) => {
    api.get(`/contact/queries/${queryId}`)
      .then((res) => {
        setSelectedQuery(res.data.data);
        fetchQueries();
      })
      .catch((err) => console.error("Failed to load query details:", err));
  };

  const handleMarkAsReplied = async (queryId) => {
    try {
      await api.patch(`/contact/queries/${queryId}/status`, { status: "replied" });
      setSelectedQuery({ ...selectedQuery, status: "replied" });
      fetchQueries();
      fetchSummary();
    } catch (err) {
      console.error("Failed to update:", err);
      alert("Failed to mark as replied");
    }
  };

  if (loading) return <div style={{ padding: "20px" }}>Loading queries...</div>;

  return (
    <div>
      <h2 style={{ color: "#0b1e3d", marginBottom: "24px" }}>Contact Queries</h2>

      {/* Summary Cards */}
      {summary && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
          {[
            { label: "Total", count: summary.total, color: "#3498db" },
            { label: "Unread", count: summary.unread, color: "#e74c3c" },
            { label: "Read", count: summary.read, color: "#f39c12" },
            { label: "Replied", count: summary.replied, color: "#27ae60" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                borderLeft: `4px solid ${item.color}`,
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: "bold", color: item.color }}>{item.count}</div>
              <div style={{ color: "#666", marginTop: "8px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Filter Buttons */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        {["all", "unread", "read", "replied"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: "8px 16px",
              background: filter === status ? "#c9a84c" : "#f0ede6",
              color: filter === status ? "#fff" : "#0b1e3d",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              textTransform: "capitalize",
              fontWeight: filter === status ? "bold" : "normal",
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Query Detail View */}
      {selectedQuery && (
        <div style={{ background: "#fff3cd", borderRadius: "12px", padding: "20px", marginBottom: "24px", border: "1px solid #ffc107" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
            <h3 style={{ margin: 0, color: "#0b1e3d" }}>Query Details</h3>
            <button
              onClick={() => setSelectedQuery(null)}
              style={{
                padding: "6px 12px",
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
          <div style={{ background: "#fff", padding: "16px", borderRadius: "6px", marginBottom: "16px" }}>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Name:</strong> {selectedQuery.name}
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Email:</strong> <a href={`mailto:${selectedQuery.email}`} style={{ color: "#c9a84c" }}>{selectedQuery.email}</a>
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Phone:</strong> {selectedQuery.phone || "N/A"}
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Service:</strong> {selectedQuery.service || "N/A"}
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  padding: "4px 8px",
                  background: selectedQuery.status === "unread" ? "#fee" : selectedQuery.status === "replied" ? "#efe" : "#fef",
                  color: selectedQuery.status === "unread" ? "#c00" : selectedQuery.status === "replied" ? "#060" : "#666",
                  borderRadius: "4px",
                }}
              >
                {selectedQuery.status}
              </span>
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Date:</strong> {new Date(selectedQuery.created_at).toLocaleString()}
            </p>
            {selectedQuery.message && (
              <div style={{ marginTop: "16px", padding: "12px", background: "#f9f9f9", borderRadius: "6px", borderLeft: "4px solid #c9a84c" }}>
                <strong>Message:</strong>
                <p style={{ margin: "8px 0 0 0", color: "#333", whiteSpace: "pre-wrap" }}>{selectedQuery.message}</p>
              </div>
            )}
          </div>
          {selectedQuery.status !== "replied" && (
            <button
              onClick={() => handleMarkAsReplied(selectedQuery.id)}
              style={{
                padding: "10px 20px",
                background: "#27ae60",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Mark as Replied
            </button>
          )}
        </div>
      )}

      {/* Queries Table */}
      <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        {queries.length === 0 ? (
          <p style={{ color: "#666" }}>No queries found</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr style={{ background: "#f0ede6" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Service</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Status</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((query) => (
                  <tr key={query.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px" }}>{query.name}</td>
                    <td style={{ padding: "12px" }}>{query.email}</td>
                    <td style={{ padding: "12px" }}>{query.service || "General"}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <span
                        style={{
                          padding: "4px 8px",
                          background: query.status === "unread" ? "#fee" : query.status === "replied" ? "#efe" : "#fef",
                          color: query.status === "unread" ? "#c00" : query.status === "replied" ? "#060" : "#666",
                          borderRadius: "4px",
                          fontSize: "0.85rem",
                          fontWeight: "bold",
                        }}
                      >
                        {query.status}
                      </span>
                    </td>
                    <td style={{ padding: "12px" }}>{new Date(query.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <button
                        onClick={() => handleViewQuery(query.id)}
                        style={{
                          padding: "6px 12px",
                          background: "#3498db",
                          color: "#fff",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontSize: "0.85rem",
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
