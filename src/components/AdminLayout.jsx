import { useNavigate, useLocation } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminServices from "./AdminServices";
import AdminTestimonials from "./AdminTestimonials";
import AdminQueries from "./AdminQueries";
import AdminAbout from "./AdminAbout";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("finlorax_token");
    navigate("/admin/login");
  };

  const currentPage = location.pathname.split("/admin/")[1] || "dashboard";

  const renderContent = () => {
    switch (currentPage) {
      case "services":
        return <AdminServices />;
      case "testimonials":
        return <AdminTestimonials />;
      case "queries":
        return <AdminQueries />;
      case "about":
        return <AdminAbout />;
      case "dashboard":
      default:
        return <AdminDashboard />;
    }
  };

  const isActive = (page) => currentPage === page;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f4ee" }}>
      {/* Sidebar */}
      <div style={{ width: "260px", background: "#0b1e3d", color: "#fff", padding: "30px 20px", position: "fixed", height: "100vh", overflowY: "auto" }}>
        <h3 style={{ color: "#c9a84c", marginBottom: "40px" }}>Finlorax Admin</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          <button
            onClick={() => navigate("/admin/dashboard")}
            style={{
              background: isActive("dashboard") ? "#c9a84c" : "transparent",
              border: "none",
              color: "#fff",
              textAlign: "left",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { if (!isActive("dashboard")) e.target.style.background = "rgba(201,168,76,0.2)"; }}
            onMouseLeave={(e) => { if (!isActive("dashboard")) e.target.style.background = "transparent"; }}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => navigate("/admin/services")}
            style={{
              background: isActive("services") ? "#c9a84c" : "transparent",
              border: "none",
              color: "#fff",
              textAlign: "left",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { if (!isActive("services")) e.target.style.background = "rgba(201,168,76,0.2)"; }}
            onMouseLeave={(e) => { if (!isActive("services")) e.target.style.background = "transparent"; }}
          >
            🔧 Services
          </button>
          <button
            onClick={() => navigate("/admin/testimonials")}
            style={{
              background: isActive("testimonials") ? "#c9a84c" : "transparent",
              border: "none",
              color: "#fff",
              textAlign: "left",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { if (!isActive("testimonials")) e.target.style.background = "rgba(201,168,76,0.2)"; }}
            onMouseLeave={(e) => { if (!isActive("testimonials")) e.target.style.background = "transparent"; }}
          >
            ⭐ Testimonials
          </button>
          <button
            onClick={() => navigate("/admin/queries")}
            style={{
              background: isActive("queries") ? "#c9a84c" : "transparent",
              border: "none",
              color: "#fff",
              textAlign: "left",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { if (!isActive("queries")) e.target.style.background = "rgba(201,168,76,0.2)"; }}
            onMouseLeave={(e) => { if (!isActive("queries")) e.target.style.background = "transparent"; }}
          >
            📧 Contact Queries
          </button>
          <button
            onClick={() => navigate("/admin/about")}
            style={{
              background: isActive("about") ? "#c9a84c" : "transparent",
              border: "none",
              color: "#fff",
              textAlign: "left",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { if (!isActive("about")) e.target.style.background = "rgba(201,168,76,0.2)"; }}
            onMouseLeave={(e) => { if (!isActive("about")) e.target.style.background = "transparent"; }}
          >
            ℹ️ About
          </button>
        </div>
        <button
          onClick={logout}
          style={{
            position: "absolute",
            bottom: "30px",
            left: "20px",
            width: "220px",
            background: "#c9a84c",
            color: "#0b1e3d",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: "260px", flex: 1, padding: "40px" }}>
        {renderContent()}
      </div>
    </div>
  );
}
