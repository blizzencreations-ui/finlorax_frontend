import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminDashboard    from "./AdminDashboard";
import AdminServices     from "./AdminServices";
import AdminTestimonials from "./AdminTestimonials";
import AdminQueries      from "./AdminQueries";
import AdminAbout        from "./AdminAbout";

/* ── viewport hook ───────────────────────────────────────────────────────── */
function useIsMobile(bp = 768) {
  const [mobile, setMobile] = useState(window.innerWidth < bp);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return mobile;
}

/* ── nav items config ────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { key: "dashboard",   label: "Dashboard",       icon: "📊" },
  { key: "services",    label: "Services",         icon: "🔧" },
  { key: "testimonials",label: "Testimonials",     icon: "⭐" },
  { key: "queries",     label: "Contact Queries",  icon: "📧" },
  { key: "about",       label: "About",            icon: "ℹ️"  },
];

/* ── sidebar nav button ──────────────────────────────────────────────────── */
function NavBtn({ item, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active
          ? "linear-gradient(135deg,#c9a84c,#a07830)"
          : hovered ? "rgba(201,168,76,0.15)" : "transparent",
        border: "none",
        color: active ? "#0b1e3d" : "#fff",
        textAlign: "left",
        padding: "13px 16px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.2s",
        fontWeight: active ? 700 : 500,
        fontSize: "0.92rem",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        boxShadow: active ? "0 4px 14px rgba(201,168,76,0.35)" : "none",
      }}
    >
      <span style={{ fontSize: "1rem" }}>{item.icon}</span>
      {item.label}
      {active && (
        <span style={{
          marginLeft: "auto", width: "6px", height: "6px",
          borderRadius: "50%", background: "#0b1e3d",
        }} />
      )}
    </button>
  );
}

/* ── main layout ─────────────────────────────────────────────────────────── */
export default function AdminLayout() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const isMobile   = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentPage = location.pathname.split("/admin/")[1] || "dashboard";

  /* close drawer on route change */
  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const go = (key) => navigate(`/admin/${key}`);
  const logout = () => { localStorage.removeItem("finlorax_token"); navigate("/admin/login"); };

  const renderContent = () => {
    switch (currentPage) {
      case "services":     return <AdminServices />;
      case "testimonials": return <AdminTestimonials />;
      case "queries":      return <AdminQueries />;
      case "about":        return <AdminAbout />;
      default:             return <AdminDashboard />;
    }
  };

  /* ── sidebar shared content ─────────────────────────────────────────────── */
  const SidebarInner = () => (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "28px 16px" }}>

      {/* brand */}
      <div style={{ marginBottom: "36px", paddingLeft: "4px" }}>
        <div style={{ color: "#c9a84c", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "0.02em" }}>
          Finlorax
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Admin Panel
        </div>
      </div>

      {/* nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
        {NAV_ITEMS.map((item) => (
          <NavBtn
            key={item.key}
            item={item}
            active={currentPage === item.key}
            onClick={() => go(item.key)}
          />
        ))}
      </nav>

      {/* logout */}
      <button
        onClick={logout}
        style={{
          background: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.3)",
          color: "#c9a84c",
          padding: "13px 16px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "0.9rem",
          width: "100%",
          transition: "all 0.2s",
          display: "flex", alignItems: "center", gap: "8px",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.22)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.12)"; }}
      >
        🚪 Logout
      </button>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh", background: "#f7f4ee" }}>

        {/* ══ DESKTOP: fixed sidebar ══════════════════════════════════════ */}
        {!isMobile && (
          <div style={{
            width: "240px", flexShrink: 0,
            background: "#0b1e3d",
            position: "fixed", top: 0, left: 0,
            height: "100vh", overflowY: "auto",
            boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
          }}>
            <SidebarInner />
          </div>
        )}

        {/* ══ MOBILE: top header bar ══════════════════════════════════════ */}
        {isMobile && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
            background: "#0b1e3d",
            height: "60px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
          }}>
            {/* brand */}
            <div>
              <span style={{ color: "#c9a84c", fontWeight: 800, fontSize: "1.05rem" }}>Finlorax</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", marginLeft: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Admin</span>
            </div>

            {/* page label */}
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontWeight: 500, textTransform: "capitalize" }}>
              {NAV_ITEMS.find(n => n.key === currentPage)?.icon} {currentPage}
            </div>

            {/* hamburger */}
            <button
              onClick={() => setDrawerOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{
                background: drawerOpen ? "rgba(201,168,76,0.2)" : "transparent",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "8px",
                padding: "8px 10px",
                cursor: "pointer",
                display: "flex", flexDirection: "column", gap: "4px",
                alignItems: "center", transition: "background 0.2s",
              }}
            >
              {[
                { r: drawerOpen ? "rotate(45deg)"  : "", t: drawerOpen ? "translateY(8px)" : "" },
                { opacity: drawerOpen ? 0 : 1 },
                { r: drawerOpen ? "rotate(-45deg)" : "", t: drawerOpen ? "translateY(-8px)" : "" },
              ].map((s, i) => (
                <span key={i} style={{
                  display: "block", width: "20px", height: "2px",
                  background: "#c9a84c", borderRadius: "2px",
                  transition: "all 0.3s",
                  transform: `${s.r || ""} ${s.t || ""}`.trim(),
                  opacity: s.opacity ?? 1,
                }} />
              ))}
            </button>
          </div>
        )}

        {/* ══ MOBILE: backdrop ════════════════════════════════════════════ */}
        {isMobile && drawerOpen && (
          <div
            onClick={() => setDrawerOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 910,
              background: "rgba(0,0,0,0.55)",
              animation: "fadeInOverlay 0.2s ease",
            }}
          />
        )}

        {/* ══ MOBILE: slide-in drawer ══════════════════════════════════════ */}
        {isMobile && drawerOpen && (
          <div style={{
            position: "fixed", top: 0, left: 0, bottom: 0,
            width: "260px", zIndex: 920,
            background: "#0b1e3d",
            animation: "slideInLeft 0.25s ease",
            boxShadow: "6px 0 30px rgba(0,0,0,0.3)",
          }}>
            <SidebarInner />
          </div>
        )}

        {/* ══ MOBILE: bottom tab bar ═══════════════════════════════════════ */}
        {isMobile && (
          <div style={{
            position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 800,
            background: "#0b1e3d",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            display: "flex",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
          }}>
            {NAV_ITEMS.map((item) => {
              const active = currentPage === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => go(item.key)}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    color: active ? "#c9a84c" : "rgba(255,255,255,0.45)",
                    padding: "10px 4px 8px",
                    cursor: "pointer",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", gap: "3px",
                    transition: "color 0.2s",
                    borderTop: active ? "2px solid #c9a84c" : "2px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.6rem", fontWeight: active ? 700 : 400, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {item.key === "testimonials" ? "Reviews" : item.key === "queries" ? "Queries" : item.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* ══ MAIN CONTENT ════════════════════════════════════════════════ */}
        <div style={{
          marginLeft: isMobile ? 0 : "240px",
          flex: 1,
          padding: isMobile ? "76px 16px 90px" : "36px 40px",
          minWidth: 0, // prevents flex overflow
        }}>
          {renderContent()}
        </div>

      </div>
    </>
  );
}