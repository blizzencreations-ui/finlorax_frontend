import { useState, useEffect } from "react";
import api from "../api/api";

export default function AdminAbout() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    headline: "",
    subheadline: "",
    description: "",
    experienceYears: 5,
    clientsCount: "200+",
    bullets: [],
  });

  useEffect(() => {
    api.get("/about")
      .then((res) => {
        const data = res.data.data;
        setAboutData(data);
        setFormData(data || {
          headline: "",
          subheadline: "",
          description: "",
          experienceYears: 5,
          clientsCount: "200+",
          bullets: [],
        });
      })
      .catch((err) => console.error("Failed to load about:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleUpdate = async () => {
    try {
      await api.put(`/about`, formData);
      setAboutData(formData);
      setIsEditing(false);
      alert("About section updated successfully!");
    } catch (err) {
      console.error("Failed to update:", err);
      alert("Failed to update about section");
    }
  };

  const handleAddBullet = () => {
    setFormData({
      ...formData,
      bullets: [...(formData.bullets || []), { bullet: "", id: Date.now() }],
    });
  };

  const handleRemoveBullet = (index) => {
    setFormData({
      ...formData,
      bullets: (formData.bullets || []).filter((_, i) => i !== index),
    });
  };

  const handleBulletChange = (index, value) => {
    const updated = [...(formData.bullets || [])];
    if (typeof updated[index] === "string") {
      updated[index] = value;
    } else {
      updated[index].bullet = value;
    }
    setFormData({ ...formData, bullets: updated });
  };

  if (loading) return <div style={{ padding: "20px" }}>Loading about section...</div>;

  return (
    <div>
      <h2 style={{ color: "#0b1e3d", marginBottom: "24px" }}>About Section</h2>
      <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        {!isEditing ? (
          <div>
            <h3>{aboutData?.headline}</h3>
            {aboutData?.subheadline && <p style={{ color: "#c9a84c", marginTop: "8px" }}>{aboutData.subheadline}</p>}
            <p style={{ color: "#666", lineHeight: "1.6", marginTop: "12px" }}>{aboutData?.description}</p>
            {aboutData?.bullets && aboutData.bullets.length > 0 && (
              <ul style={{ marginTop: "16px", color: "#666" }}>
                {aboutData.bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    {typeof b === "string" ? b : b.bullet}
                  </li>
                ))}
              </ul>
            )}
            <div style={{ marginTop: "16px", fontSize: "0.9rem", color: "#999" }}>
              <p>Experience: {aboutData?.experienceYears} years | Clients: {aboutData?.clientsCount}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              style={{ marginTop: "20px", padding: "10px 20px", background: "#c9a84c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
            >
              Edit
            </button>
          </div>
        ) : (
          <div>
            <label style={{ display: "block", marginBottom: "12px" }}>
              Headline:
              <input
                type="text"
                value={formData.headline || ""}
                onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
              />
            </label>
            <label style={{ display: "block", marginBottom: "12px" }}>
              Subheadline:
              <input
                type="text"
                value={formData.subheadline || ""}
                onChange={(e) => setFormData({ ...formData, subheadline: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
              />
            </label>
            <label style={{ display: "block", marginBottom: "12px" }}>
              Description:
              <textarea
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
              />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              <label>
                Experience Years:
                <input
                  type="number"
                  value={formData.experienceYears || 5}
                  onChange={(e) => setFormData({ ...formData, experienceYears: parseInt(e.target.value) })}
                  style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
                />
              </label>
              <label>
                Clients Count:
                <input
                  type="text"
                  value={formData.clientsCount || "200+"}
                  onChange={(e) => setFormData({ ...formData, clientsCount: e.target.value })}
                  style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "6px" }}
                />
              </label>
            </div>

            {/* Bullets Section */}
            <div style={{ marginBottom: "12px", background: "#f9f9f9", padding: "12px", borderRadius: "6px" }}>
              <h4 style={{ marginTop: 0, marginBottom: "12px" }}>Key Points/Bullets</h4>
              {(formData.bullets || []).map((bullet, i) => (
                <div key={i} style={{ marginBottom: "8px", display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    value={typeof bullet === "string" ? bullet : bullet.bullet}
                    onChange={(e) => handleBulletChange(i, e.target.value)}
                    placeholder={`Bullet point ${i + 1}`}
                    style={{ flex: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
                  />
                  <button
                    onClick={() => handleRemoveBullet(i)}
                    style={{ padding: "8px 12px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddBullet}
                style={{ marginTop: "8px", padding: "8px 12px", background: "#3498db", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                + Add Bullet Point
              </button>
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button
                onClick={handleUpdate}
                style={{ padding: "10px 20px", background: "#2ecc71", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                style={{ padding: "10px 20px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
