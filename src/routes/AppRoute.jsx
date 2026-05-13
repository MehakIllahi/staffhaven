import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-load all pages – they only download when the user navigates to them
const Home          = lazy(() => import("../pages/Home"));
const About         = lazy(() => import("../pages/About"));
const Services      = lazy(() => import("../pages/Services"));
const Blog          = lazy(() => import("../pages/Blog"));
const Contact       = lazy(() => import("../pages/Contact"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const CookiePolicy  = lazy(() => import("../pages/CookiePolicy"));
const TermOfUse     = lazy(() => import("../pages/TermOfUse"));
const NotFound      = lazy(() => import("../components/common/NotFound"));
const ServiceDetails = lazy(() => import("../components/Service/ServiceDetails"));

// Minimal spinner shown while a page chunk loads
const PageLoader = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="spinner-border text-secondary" role="status">
      <span className="visually-hidden">Loading…</span>
    </div>
  </div>
);

const AppRoute = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/"               element={<Home />} />
      <Route path="/about"          element={<About />} />
      <Route path="/services"       element={<Services />} />
      <Route path="/hire-talent"    element={<Blog />} />
      <Route path="/contact"        element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy"  element={<CookiePolicy />} />
      <Route path="/terms"          element={<TermOfUse />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="*"               element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoute;
