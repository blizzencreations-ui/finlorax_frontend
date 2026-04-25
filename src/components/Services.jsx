import { useState, useEffect } from "react";
import { useServicesData } from "../hooks/useServicesData";
import ServiceCard from "./ServiceCard";
import ServiceDetail from "./ServiceDetail";
import SectionLabel from "./SectionLabel";

/* ── tiny local reveal helper ───────────────────────────────────────────────
   Runs the same IntersectionObserver logic as App's useReveal, but scoped
   to this component so it fires whenever we return from the detail view.
──────────────────────────────────────────────────────────────────────────── */
function triggerReveal() {
  requestAnimationFrame(() => {
    setTimeout(() => {
      const els = document.querySelectorAll(".reveal");
      if (!els.length) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), idx * 80);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      els.forEach((el) => {
        el.classList.remove("visible"); // reset first
        obs.observe(el);
      });
    }, 80); // let React paint the grid first
  });
}

/**
 * Props:
 *   services            – pre-fetched array from parent (App.jsx). When
 *                         provided the internal hook fetch is skipped.
 *   serviceItemDetails  – pre-fetched lookup from parent.
 *   onReadMore          – optional external handler (services inner page).
 *                         When absent, Services manages its own detail view.
 */
export default function Services({
  onReadMore: externalOnReadMore,
  services:           propServices,
  serviceItemDetails: propSID,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // ── Only fetch internally when not driven by App.jsx (e.g. storybook /
  //    isolated rendering). When App provides the data, skip the extra call.
  const { services: hookServices, serviceItemDetails: hookSID, loading, source } = useServicesData();
 const services = propServices ?? hookServices;
const serviceItemDetails = propSID ?? hookSID;
const isUsingProps = !!propServices;
const finalSource = isUsingProps ? "props (App.jsx)" : source;

  /* Re-run the reveal observer every time we come back to the grid */
  useEffect(() => {
    if (selectedIndex === null) {
      triggerReveal();
    }
  }, [selectedIndex]);
  useEffect(() => {
  if (services && services.length > 0) {
    triggerReveal();
  }
}, [services]);
  useEffect(() => {
  console.log("🔥 SERVICES COMPONENT DEBUG");
  console.log("👉 Data Source:", finalSource);
  console.log("👉 Services Data:", services);
  console.log("👉 Item Details:", serviceItemDetails);
}, [services, serviceItemDetails, finalSource]);

  /* ── which handler to use ──────────────────────────────────────────────── */
  const handleReadMore = (i) => {
    if (externalOnReadMore) {
      externalOnReadMore(i); // services inner page: App.jsx owns routing
    } else {
      setSelectedIndex(i); // home page: local state
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setSelectedIndex(null); // triggers the useEffect above
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── detail view (home page only) ─────────────────────────────────────── */
  if (!externalOnReadMore && selectedIndex !== null) {
    return (
      <ServiceDetail
        service={services[selectedIndex]}
        serviceItemDetails={serviceItemDetails}
        onBack={handleBack}
      />
    );
  }

  /* ── grid view ─────────────────────────────────────────────────────────── */
  return (
    <section id="services" style={{ padding: "110px 5%", background: "#0b1e3d" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <SectionLabel label="Our Services" center />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#fff", marginBottom: "16px",
          }}>
            Our <span className="gold-text">Professional</span> Services
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.5)", fontSize: "1rem",
            maxWidth: "560px", margin: "0 auto", lineHeight: "1.8",
          }}>
            Comprehensive tax and compliance solutions for individuals and
            businesses of every size.
          </p>
        </div>
        {/* temporary */}
        

        {/* Loading skeleton — only shown on first paint if backend is slow */}
        {loading && services.length === 0 ? (
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "22px",
          }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{
                height: "300px", borderRadius: "20px",
                background: "linear-gradient(135deg, #0b1e3d 0%, #122648 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                animation: "pulse 1.5s ease-in-out infinite",
                opacity: 0.6,
              }} />
            ))}
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 0.4; }
                50%       { opacity: 0.7; }
              }
            `}</style>
          </div>
        ) : (
          /* 2-column card grid */
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "22px",
          }}>
            {services.map((s, i) => (
              <ServiceCard
                key={s.id ?? s.title}
                {...s}
                delay={i * 100}
                onReadMore={() => handleReadMore(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
