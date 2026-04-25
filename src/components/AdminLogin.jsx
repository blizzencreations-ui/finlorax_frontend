// src/components/AdminLogin.jsx
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("finlorax_token", res.data.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0b1e3d", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", padding: "40px", borderRadius: "20px", width: "400px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#0b1e3d" }}>Admin Login</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={{ width: "100%", padding: "14px", marginBottom: "16px", borderRadius: "10px", border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={{ width: "100%", padding: "14px", marginBottom: "24px", borderRadius: "10px", border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{ width: "100%", padding: "14px", background: "#c9a84c", color: "#0b1e3d", border: "none", borderRadius: "10px", fontWeight: 700 }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}