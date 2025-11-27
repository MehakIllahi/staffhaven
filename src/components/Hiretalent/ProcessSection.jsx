import processImage from "../../assets/img8.jpg";
import { useState } from "react";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
export function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      title: "Book a Call",
      description:
        "Schedule a call with our team to get started quickly and easily.",
    },
    {
      title: "Speak to Our Hiring Experts",
      description:
        "Our specialists will understand your needs and talent requirements.",
    },
    {
      title: "Agree a Strategy",
      description:
        "We craft a tailored recruitment plan aligned with your goals.",
    },
    {
      title: "Start Hiring",
      description:
        "Sit back, relax and prepare for some serious talent to come your way.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <ProgressiveImage
              src={processImage}
              alt="our process"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Right content */}
          <div className="col-md-6">
            <h2 className="fw-bold display-6 mb-4">Our Process</h2>

            {steps.map((step, index) => (
              <div key={index} className="mb-4">
                <div
                  className="d-flex align-items-start justify-content-between"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggle(index)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <h4 className="fw-bold m-0">{index + 1}</h4>
                    <h5 className="m-0">{step.title}</h5>
                  </div>
                  <span className="fs-4">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {openIndex === index && (
                  <p className="mt-2 ps-4 border-start border-2 border-dark text-muted">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
