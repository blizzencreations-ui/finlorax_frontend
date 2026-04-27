import { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin   from "./components/AdminLogin";
import AdminLayout  from "./components/AdminLayout";

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

import { useServicesData } from "./hooks/useServicesData";

/* ══════════════════════════════════════════════════════════════════════════
   MOBILE CONTEXT
   Single resize listener for the whole tree — no duplicated hooks.
   Usage anywhere: const isMobile = useMobile();
══════════════════════════════════════════════════════════════════════════ */
export const MobileContext = createContext(false);

export function useMobile() {
  return useContext(MobileContext);
}

function MobileProvider({ children, breakpoint = 768 }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [breakpoint]);

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   PROTECTED ROUTE
══════════════════════════════════════════════════════════════════════════ */
function ProtectedAdminRoute() {
  const isMobile = useMobile();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem("finlorax_token"));
  }, []);

  if (isAuth === null) return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      minHeight: "100vh", background: "#f7f4ee",
      fontSize: isMobile ? "0.9rem" : "1rem", color: "#0b1e3d",
    }}>
      Authenticating…
    </div>
  );

  if (!isAuth) return <Navigate to="/admin/login" replace />;
  return <AdminLayout />;
}

/* ══════════════════════════════════════════════════════════════════════════
   REVEAL HELPERS
══════════════════════════════════════════════════════════════════════════ */
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

      els.forEach((el) => { el.classList.remove("visible"); obs.observe(el); });
    }, 80);
  });
}

function useReveal(dep) {
  useEffect(() => { runReveal(); }, [dep]);
}

/* ══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT MAP
══════════════════════════════════════════════════════════════════════════ */
const PAGE_COMPONENT = {
  about:        <About />,
  testimonials: <Testimonials />,
  contact:      <Contact />,
};

/* ══════════════════════════════════════════════════════════════════════════
   INNER PAGE
══════════════════════════════════════════════════════════════════════════ */
function InnerPage({ page, onHome, serviceIndex, onServiceSelect, onServiceBack, services, serviceItemDetails }) {
  if (page === "services") {
    return (
      <div className="page-enter">
        <PageBanner page="services" onHome={onHome} />
        {serviceIndex !== null ? (
          <ServiceDetail
            service={services[serviceIndex]}
            serviceItemDetails={serviceItemDetails}
            onBack={onServiceBack}
          />
        ) : (
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

  return (
    <div className="page-enter">
      <PageBanner page={page} onHome={onHome} />
      {PAGE_COMPONENT[page]}
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════════════════════ */
function HomePage({ services, serviceItemDetails }) {
  return (
    <div className="page-enter">
      <Hero />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      <Services services={services} serviceItemDetails={serviceItemDetails} />
      <CustomerExperience />
      <QuoteForm />
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   GLOBAL MOBILE CSS
   Injected once so you don't need a separate stylesheet edit.
══════════════════════════════════════════════════════════════════════════ */
function GlobalMobileStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; }

      html { -webkit-text-size-adjust: 100%; }

      body {
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
      }

      /* Prevent images from breaking layout */
      img { max-width: 100%; height: auto; }

      /* Smooth scrolling */
      html { scroll-behavior: smooth; }

      /* Tap highlight removal on mobile */
      a, button { -webkit-tap-highlight-color: transparent; }

      /* Page transition */
      .page-enter {
        animation: pageFadeIn 0.3s ease forwards;
      }
      @keyframes pageFadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SHARED ROUTE CONTENT (avoids duplication between / and *)
══════════════════════════════════════════════════════════════════════════ */
function PublicSite({ activePage, handleNavigate, serviceIndex, handleServiceSelect, handleServiceBack, services, serviceItemDetails }) {
  return (
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
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════════════════════════════════ */
export default function App() {
  const [activePage,   setActivePage]   = useState("home");
  const [serviceIndex, setServiceIndex] = useState(null);

  const { services, serviceItemDetails } = useServicesData();

  useReveal(activePage);

  useEffect(() => {
    if (serviceIndex === null && activePage === "services") runReveal();
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

  const publicProps = {
    activePage, handleNavigate,
    serviceIndex, handleServiceSelect, handleServiceBack,
    services, serviceItemDetails,
  };

  return (
    <MobileProvider>
      <GlobalMobileStyles />
      <Routes>
        <Route path="/"                   element={<PublicSite {...publicProps} />} />
        <Route path="/admin/login"        element={<AdminLogin />} />
        <Route path="/admin/dashboard"    element={<ProtectedAdminRoute />} />
        <Route path="/admin/services"     element={<ProtectedAdminRoute />} />
        <Route path="/admin/testimonials" element={<ProtectedAdminRoute />} />
        <Route path="/admin/queries"      element={<ProtectedAdminRoute />} />
        <Route path="/admin/about"        element={<ProtectedAdminRoute />} />
        <Route path="*"                   element={<PublicSite {...publicProps} />} />
      </Routes>
    </MobileProvider>
  );
}