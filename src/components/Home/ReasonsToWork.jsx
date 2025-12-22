import React, { useEffect, useRef } from "react";
import { FiUsers, FiGlobe, FiStar } from "react-icons/fi";
import { AiOutlineRocket } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

const ReasonsToWork = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 576;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;

          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = isMobile
              ? `${index * 0.2}s`
              : "0s";

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(30px)";
            entry.target.style.transitionDelay = "0s";
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: <FaHandshake size={48} />,
      text: "Build an international career in a successful company",
    },
    {
      icon: <AiOutlineRocket size={48} />,
      text: "Be involved in projects for worldwide brands",
    },
    {
      icon: <FiGlobe size={48} />,
      text: "Join a multicultural team of people from all over the world",
    },
    {
      icon: <FiUsers size={48} />,
      text: "Upgrade your professional and social skills",
    },
    {
      icon: <FiStar size={48} />,
      text: "Gain skills and experience in a global company",
    },
  ];

  return (
    <section className="py-5 bg-primary-custom">
      <div className="container text-center">
        <h2 className="mb-5 fw-light text-uppercase text-white">
          5 Reasons to Work With Us
        </h2>

        <div className="row g-4 justify-content-center">
          {reasons.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg">
              <div
                ref={(el) => (itemsRef.current[index] = el)}
                data-index={index}
                className="d-flex flex-column align-items-center h-100"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "all 0.6s ease",
                }}
              >
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                >
                  {item.icon}
                </div>

                <p
                  className="small text-white mb-0"
                  style={{ maxWidth: "180px" }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToWork;
