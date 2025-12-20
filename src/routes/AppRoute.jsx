import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import TermOfUse from "../pages/TermOfUse";
import NotFound from "../components/common/NotFound";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/hire-talent" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/terms" element={<TermOfUse />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
