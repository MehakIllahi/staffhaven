import React from "react";
import HeroSection from "../components/Home/HeroSection";
import OurServices from "../components/Home/OurServices";
import HiringSolutions from "../components/Home/HiringSolutions";
import WhyStaffHaven from "../components/Home/WhyStaffHaven";
import ReviewSlider from "../components/Home/ReviewSlider";
import AboutSection from "../components/Home/AboutSection";
import ReasonsToWork from "../components/Home/ReasonsToWork";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HiringSolutions />
      <WhyStaffHaven />
      <OurServices />
      <ReasonsToWork />
      <AboutSection />
      <ReviewSlider />
    </>
  );
};

export default Home;
