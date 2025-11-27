import React from "react";
import CareerSection from "../components/About/CareerSection";
import HiringSection from "../components/Hiretalent/HiringSection";
import { TimeToWasteSection } from "../components/Hiretalent/TimeToWaste";
import { SolutionSection } from "../components/Hiretalent/SolutionSection";
import { ProcessSection } from "../components/Hiretalent/ProcessSection";

const Blog = () => {
  return (
    <>
      <HiringSection />
      <TimeToWasteSection />
      <SolutionSection />
      <ProcessSection />
    </>
  );
};

export default Blog;
