import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoute from "./routes/AppRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";
import CookiesBanner from "./components/common/CookiesBanner";

const App = () => {
  return (
    <>
      <Header />
      <CookiesBanner />
      <ScrollToTop />
      <AppRoute />
      <Footer />
    </>
  );
};

export default App;
