import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoute from "./routes/AppRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Header />
      <AppRoute />
      <Footer />
    </>
  );
};

export default App;
