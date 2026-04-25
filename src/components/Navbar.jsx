import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",        key: "about"        },
  { label: "Services",     key: "services"     },
  { label: "Testimonials", key: "testimonials" },
];

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = (e) => {
    e.preventDefault();
    onNavigate("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPage = (e, key) => {
    e.preventDefault();
    onNavigate(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={scrolled ? "nav-blur" : ""}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 5%",
        background: scrolled ? "rgba(4,13,31,0.95)" : "rgba(4,13,31,0.6)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        transition: "background 0.4s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "78px" }}>

        {/* Logo → goes home */}
         {/* Logo */}
          <a
  href="#"
  style={{
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  }}
>
  <img
    src="/finlorax_bussiness_logo.jpeg"
    alt="Finlorax Financial Services"
    style={{
      height: "80px",
      width: "auto",
      borderRadius: "12px",
      transition: "all 0.35s ease",
      filter: "drop-shadow(0 2px 4px rgba(252, 249, 249, 0.35))",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
      e.currentTarget.style.filter =
        "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) " +
        "drop-shadow(0 0 6px rgba(201,168,76,0.6)) " +
        "drop-shadow(0 0 12px rgba(201,168,76,0.4))";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.filter =
        "drop-shadow(0 2px 4px rgba(252, 249, 249, 0.58))";
    }}
  />
</a>

        {/* Nav links + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>

          {/* Home link */}
          <a
            href="#"
            onClick={goHome}
            style={{
              color: activePage === "home" ? "#c9a84c" : "rgba(255,255,255,0.75)",
              textDecoration: "none", fontSize: "0.9rem",
              fontWeight: activePage === "home" ? 700 : 500,
              padding: "7px 14px", borderRadius: "8px",
              background: activePage === "home" ? "rgba(201,168,76,0.1)" : "transparent",
              border: activePage === "home" ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { if (activePage !== "home") { e.currentTarget.style.color = "#c9a84c"; e.currentTarget.style.background = "rgba(201,168,76,0.06)"; } }}
            onMouseLeave={(e) => { if (activePage !== "home") { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.background = "transparent"; } }}
          >
            Home
          </a>

          {NAV_LINKS.map(({ label, key }) => {
            const isActive = activePage === key;
            return (
              <a
                key={key}
                href="#"
                onClick={(e) => goPage(e, key)}
                style={{
                  color: isActive ? "#c9a84c" : "rgba(255,255,255,0.75)",
                  textDecoration: "none", fontSize: "0.9rem",
                  fontWeight: isActive ? 700 : 500,
                  padding: "7px 14px", borderRadius: "8px",
                  background: isActive ? "rgba(201,168,76,0.1)" : "transparent",
                  border: isActive ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
                  transition: "all 0.2s", position: "relative",
                }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "#c9a84c"; e.currentTarget.style.background = "rgba(201,168,76,0.06)"; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.background = "transparent"; } }}
              >
                {label}
                {isActive && (
                  <span style={{
                    position: "absolute", bottom: "4px", left: "50%",
                    transform: "translateX(-50%)",
                    width: "4px", height: "4px", borderRadius: "50%",
                    background: "#c9a84c", display: "block",
                  }} />
                )}
              </a>
            );
          })}

          {/* Contact CTA */}
          <a
            href="#"
            onClick={(e) => goPage(e, "contact")}
            style={{
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              color: "#0b1e3d", padding: "10px 22px", borderRadius: "8px",
              fontWeight: 700, textDecoration: "none", fontSize: "0.88rem",
              boxShadow: "0 4px 18px rgba(201,168,76,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block", marginLeft: "10px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(201,168,76,0.35)"; }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
