import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",        key: "about"        },
  { label: "Services",     key: "services"     },
  { label: "Testimonials", key: "testimonials" },
];

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [isMobile,     setIsMobile]     = useState(window.innerWidth < 768);

  /* ── scroll + resize listeners ─────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* ── close menu on body scroll when open ───────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── navigation helpers ─────────────────────────────────────── */
  const goHome = (e) => {
    e.preventDefault();
    onNavigate("home");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPage = (e, key) => {
    e.preventDefault();
    onNavigate(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── shared link style factory ──────────────────────────────── */
  const linkStyle = (isActive) => ({
    color: isActive ? "#c9a84c" : "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: isActive ? 700 : 500,
    padding: "7px 14px",
    borderRadius: "8px",
    background: isActive ? "rgba(201,168,76,0.1)" : "transparent",
    border: isActive ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
    transition: "all 0.2s",
    position: "relative",
    display: "inline-block",
  });

  const mobileLinkStyle = (isActive) => ({
    color: isActive ? "#c9a84c" : "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontSize: "1.05rem",
    fontWeight: isActive ? 700 : 500,
    padding: "14px 20px",
    borderRadius: "10px",
    background: isActive ? "rgba(201,168,76,0.1)" : "transparent",
    border: isActive ? "1px solid rgba(201,168,76,0.2)" : "1px solid transparent",
    transition: "all 0.2s",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
  });

  /* ── hamburger icon (3 bars → X) ───────────────────────────── */
  const Bar = ({ rotate, translateY, opacity = 1 }) => (
    <span style={{
      display: "block",
      width: "22px",
      height: "2px",
      background: "#c9a84c",
      borderRadius: "2px",
      transition: "all 0.3s ease",
      transform: `${rotate || ""} ${translateY || ""}`.trim(),
      opacity,
    }} />
  );

  return (
    <>
      {/* ── Inject keyframes once ─────────────────────────────── */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-link:hover {
          background: rgba(201,168,76,0.08) !important;
          color: #c9a84c !important;
          border-color: rgba(201,168,76,0.2) !important;
        }
        .nav-link-desktop:hover {
          color: #c9a84c !important;
          background: rgba(201,168,76,0.06) !important;
        }
        .cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 28px rgba(201,168,76,0.5) !important;
        }
        .hamburger-btn:hover {
          background: rgba(201,168,76,0.1) !important;
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 5%",
        background: (scrolled || menuOpen)
          ? "rgba(4,13,31,0.97)"
          : "rgba(4,13,31,0.6)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        backdropFilter: "blur(12px)",
        transition: "background 0.4s",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}>

          {/* ── Logo ──────────────────────────────────────────── */}
          <a href="#" onClick={goHome} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/finlorax_bussiness_logo.jpeg"
              alt="Finlorax Financial Services"
              style={{
                height: "64px",
                width: "auto",
                borderRadius: "10px",
                transition: "all 0.35s ease",
                filter: "drop-shadow(0 2px 4px rgba(252,249,249,0.35))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                e.currentTarget.style.filter =
                  "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 0 6px rgba(201,168,76,0.6))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.filter = "drop-shadow(0 2px 4px rgba(252,249,249,0.58))";
              }}
            />
          </a>

          {/* ── Desktop nav ───────────────────────────────────── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>

              {/* Home */}
              <a href="#" onClick={goHome} className="nav-link-desktop" style={linkStyle(activePage === "home")}>
                Home
                {activePage === "home" && <ActiveDot />}
              </a>

              {NAV_LINKS.map(({ label, key }) => (
                  <a
                  key={key}
                  href="#"
                  onClick={(e) => goPage(e, key)}
                  className="nav-link-desktop"
                  style={linkStyle(activePage === key)}
                >
                  {label}
                  {activePage === key && <ActiveDot />}
                </a>
              ))}

              {/* CTA */}
                <a
                href="#"
                onClick={(e) => goPage(e, "contact")}
                className="cta-btn"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #a07830)",
                  color: "#0b1e3d",
                  padding: "10px 22px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  boxShadow: "0 4px 18px rgba(201,168,76,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-block",
                  marginLeft: "10px",
                }}
              >
                Contact Us
              </a>
            </div>
          )}

          {/* ── Hamburger button (mobile only) ────────────────── */}
          {isMobile && (
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "transparent",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "8px",
                padding: "10px 12px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              <Bar
                rotate={menuOpen ? "rotate(45deg)" : ""}
                translateY={menuOpen ? "translateY(7px)" : ""}
              />
              <Bar opacity={menuOpen ? 0 : 1} />
              <Bar
                rotate={menuOpen ? "rotate(-45deg)" : ""}
                translateY={menuOpen ? "translateY(-7px)" : ""}
              />
            </button>
          )}
        </div>

        {/* ── Mobile dropdown menu ──────────────────────────────── */}
        {isMobile && menuOpen && (
          <div style={{
            animation: "slideDown 0.25s ease forwards",
            paddingBottom: "20px",
            borderTop: "1px solid rgba(201,168,76,0.1)",
            marginTop: "2px",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "14px" }}>

              {/* Home */}
              <a href="#" onClick={goHome} className="mobile-link" style={mobileLinkStyle(activePage === "home")}>
                🏠 Home
              </a>

              {NAV_LINKS.map(({ label, key }) => (
                <a
                  key={key}
                  href="#"
                  onClick={(e) => goPage(e, key)}
                  className="mobile-link"
                  style={mobileLinkStyle(activePage === key)}
                >
                  {label}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#"
                onClick={(e) => goPage(e, "contact")}
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #a07830)",
                  color: "#0b1e3d",
                  padding: "14px 20px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: "6px",
                  display: "block",
                  boxShadow: "0 4px 18px rgba(201,168,76,0.3)",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

/* ── tiny dot under active desktop link ─────────────────────────────────── */
function ActiveDot() {
  return (
    <span style={{
      position: "absolute", bottom: "4px", left: "50%",
      transform: "translateX(-50%)",
      width: "4px", height: "4px", borderRadius: "50%",
      background: "#c9a84c", display: "block",
    }} />
  );
}