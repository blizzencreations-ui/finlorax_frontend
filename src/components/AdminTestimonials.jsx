import { useState, useEffect } from "react";
import api from "../api/api";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    quote: "",
    name: "",
    role: "",
    initial: "A",
    sortOrder: 0,
    active: true,
  });

  const fetchTestimonials = () => {
    api.get("/testimonials/all")
      .then((res) => setTestimonials(res.data.data || []))
      .catch((err) => console.error("Failed to load testimonials:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleAddClick = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      quote: "",
      name: "",
      role: "",
      initial: "A",
      sortOrder: 0,
      active: true,
    });
  };

  const handleEditClick = (testimonial) => {
    setEditingId(testimonial.id);
    setIsAdding(true);
    setFormData({
      quote: testimonial.quote,
      name: testimonial.name,
      role: testimonial.role,
      initial: testimonial.initial || "A",
      sortOrder: testimonial.sortOrder || 0,
      active: testimonial.active,
    });
  };

  const handleSave = async () => {
    if (!formData.quote || !formData.name || !formData.role) {
      alert("Please fill in quote, name, and role");
      return;
    }

    try {
      if (editingId) {
        await api.put(`/testimonials/${editingId}`, formData);
        alert("Testimonial updated successfully!");
      } else {
        await api.post("/testimonials", formData);
        alert("Testimonial created successfully!");
      }
      setIsAdding(false);
      setEditingId(null);
      fetchTestimonials();
    } catch (err) {
      console.error("Failed to save:", err);
      alert("Failed to save testimonial");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      await api.delete(`/testimonials/${id}`);
      alert("Testimonial deleted successfully!");
      fetchTestimonials();
    } catch (err) {
      console.error("Failed to delete:", err);
      alert("Failed to delete testimonial");
    }
  };

  const handleToggleActive = async (id, currentActive) => {
    try {
      await api.patch(`/testimonials/${id}/toggle`);
      fetchTestimonials();
    } catch (err) {
      console.error("Failed to toggle:", err);
      alert("Failed to toggle testimonial");
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({
      quote: "",
      name: "",
      role: "",
      initial: "A",
      sortOrder: 0,
      active: true,
    });
  };

  if (loading) return <div style={{ padding: "20px" }}>Loading testimonials...</div>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h2 style={{ color: "#0b1e3d", margin: 0 }}>Manage Testimonials</h2>
        {!isAdding && (
          <button
            onClick={handleAddClick}
            style={{ padding: "10px 20px", background: "#27ae60", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            + Add Testimonial
          </button>
        )}
      </div>

      {isAdding && (
        <div style={{ background: "#f9f9f9", borderRadius: "12px", padding: "24px", marginBottom: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <h3 style={{ marginTop: 0, color: "#0b1e3d" }}>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h3>
          <label style={{ display: "block", marginBottom: "12px" }}>
            Quote:
            <textarea
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              rows={4}
              style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
              placeholder="Enter the testimonial quote..."
            />
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
                placeholder="Client name"
              />
            </label>
            <label>
              Role/Title:
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
                placeholder="e.g., CEO, Business Owner"
              />
            </label>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <label>
              Initial:
              <input
                type="text"
                maxLength="1"
                value={formData.initial}
                onChange={(e) => setFormData({ ...formData, initial: e.target.value.toUpperCase() })}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
              />
            </label>
            <label>
              Sort Order:
              <input
                type="number"
                value={formData.sortOrder}
                onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) })}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
              />
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                style={{ marginRight: "8px", marginTop: "28px" }}
              />
              Active
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleSave}
              style={{ padding: "10px 20px", background: "#2ecc71", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              style={{ padding: "10px 20px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        {testimonials.length === 0 ? (
          <p>No testimonials found</p>
        ) : (
          <table style={{ width: "100%" }}>
            <thead>
              <tr style={{ background: "#f0ede6" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>Client Name</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Role</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Quote</th>
                <th style={{ padding: "12px", textAlign: "center" }}>Status</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial) => (
                <tr key={testimonial.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px" }}>{testimonial.name}</td>
                  <td style={{ padding: "12px" }}>{testimonial.role}</td>
                  <td style={{ padding: "12px", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {testimonial.quote?.substring(0, 50)}...
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    <button
                      onClick={() => handleToggleActive(testimonial.id, testimonial.active)}
                      style={{
                        padding: "4px 12px",
                        background: testimonial.active ? "#27ae60" : "#e74c3c",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                      }}
                    >
                      {testimonial.active ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() => handleEditClick(testimonial)}
                      style={{ marginRight: "8px", padding: "6px 12px", background: "#c9a84c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      style={{ padding: "6px 12px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
                    >
                      Delete
                    </button>
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
