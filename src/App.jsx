import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin  from "./components/AdminLogin";
import AdminLayout from "./components/AdminLayout";

import Navbar             from "./components/Navbar";
import Hero               from "./components/Hero";
import About              from "./components/About";
import Services           from "./components/Services";
import CtaBanner          from "./components/CtaBanner";
import CustomerExperience from "./components/CustomerExperience";
import WhyChooseUs        from "./components/WhyChooseUs";
import Testimonials       from "./components/Testimonials";
import QuoteForm          from "./components/QuoteForm";
import Footer             from "./components/Footer";
import PageBanner         from "./components/PageBanner";
import Contact            from "./components/Contact";
import ServiceDetail      from "./components/ServiceDetail";

// ── Single data fetch for the whole app ────────────────────────────────────
import { useServicesData } from "./hooks/useServicesData";

/* ─── Protected Route for Admin ─────────────────────────────────────────── */
function ProtectedAdminRoute() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem("finlorax_token"));
  }, []);

  if (isAuth === null) return <div>Loading...</div>;
  if (!isAuth) return <Navigate to="/admin/login" replace />;
  return <AdminLayout />;
}

/* ─── map nav key → section component ───────────────────────────────────── */
const PAGE_COMPONENT = {
  about:        <About />,
  testimonials: <Testimonials />,
  contact:      <Contact />,
};

/* ─── Global reveal helper ───────────────────────────────────────────────────
   Re-runs IntersectionObserver on ALL .reveal elements in the page.
──────────────────────────────────────────────────────────────────────────── */
function runReveal() {
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
        el.classList.remove("visible");
        obs.observe(el);
      });
    }, 80);
  });
}

/* ─── scroll-reveal hook ─────────────────────────────────────────────────── */
function useReveal(dep) {
  useEffect(() => { runReveal(); }, [dep]);
}

/* ─── Inner page layout ──────────────────────────────────────────────────── */
function InnerPage({
  page, onHome,
  serviceIndex, onServiceSelect, onServiceBack,
  services, serviceItemDetails,       // ← passed from App
}) {
  if (page === "services") {
    return (
      <div className="page-enter">
        <PageBanner page="services" onHome={onHome} />

        {serviceIndex !== null ? (
          /* Detail view — pass the resolved service object, not just the index */
          <ServiceDetail
            service={services[serviceIndex]}
            serviceItemDetails={serviceItemDetails}
            onBack={onServiceBack}
          />
        ) : (
          /* Grid — Services manages its own selectedIndex internally */
          <Services
            onReadMore={onServiceSelect}
            services={services}
            serviceItemDetails={serviceItemDetails}
          />
        )}

        <Footer />
      </div>
    );
  }

  const SectionComponent = PAGE_COMPONENT[page];
  return (
    <div className="page-enter">
      <PageBanner page={page} onHome={onHome} />
      {SectionComponent}
      <Footer />
    </div>
  );
}

/* ─── Home page ──────────────────────────────────────────────────────────── */
function HomePage({ services, serviceItemDetails }) {
  return (
    <div className="page-enter">
      <Hero />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      {/* Pass pre-fetched data so Services.jsx skips a second API call */}
      <Services services={services} serviceItemDetails={serviceItemDetails} />
      <CustomerExperience />
      <QuoteForm />
      <Footer />
    </div>
  );
}

/* ─── Root ───────────────────────────────────────────────────────────────── */
export default function App() {
  const [activePage,   setActivePage]   = useState("home");
  const [serviceIndex, setServiceIndex] = useState(null);

  // ── Fetch services once at the top level ───────────────────────────────
  const { services, serviceItemDetails } = useServicesData();

  /* Re-run reveal when page changes */
  useReveal(activePage);

  /* Re-run reveal when returning to the services grid */
  useEffect(() => {
    if (serviceIndex === null && activePage === "services") {
      runReveal();
    }
  }, [serviceIndex, activePage]);

  const handleNavigate = (key) => {
    setServiceIndex(null);
    setActivePage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceSelect = (idx) => {
    setServiceIndex(idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceBack = () => {
    setServiceIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Routes>
        {/* Public website */}
        <Route path="/" element={
          <>
            <Navbar activePage={activePage} onNavigate={handleNavigate} />
            {activePage === "home" ? (
              <HomePage
                key="home"
                services={services}
                serviceItemDetails={serviceItemDetails}
              />
            ) : (
              <InnerPage
                page={activePage}
                onHome={() => handleNavigate("home")}
                serviceIndex={serviceIndex}
                onServiceSelect={handleServiceSelect}
                onServiceBack={handleServiceBack}
                services={services}
                serviceItemDetails={serviceItemDetails}
              />
            )}
          </>
        } />

        {/* Admin routes */}
        <Route path="/admin/login"        element={<AdminLogin />} />
        <Route path="/admin/dashboard"    element={<ProtectedAdminRoute />} />
        <Route path="/admin/services"     element={<ProtectedAdminRoute />} />
        <Route path="/admin/testimonials" element={<ProtectedAdminRoute />} />
        <Route path="/admin/queries"      element={<ProtectedAdminRoute />} />
        <Route path="/admin/about"        element={<ProtectedAdminRoute />} />

        {/* Catch all */}
        <Route path="*" element={
          <>
            <Navbar activePage={activePage} onNavigate={handleNavigate} />
            {activePage === "home" ? (
              <HomePage
                key="home"
                services={services}
                serviceItemDetails={serviceItemDetails}
              />
            ) : (
              <InnerPage
                page={activePage}
                onHome={() => handleNavigate("home")}
                serviceIndex={serviceIndex}
                onServiceSelect={handleServiceSelect}
                onServiceBack={handleServiceBack}
                services={services}
                serviceItemDetails={serviceItemDetails}
              />
            )}
          </>
        } />
      </Routes>
    </>
  );
}
