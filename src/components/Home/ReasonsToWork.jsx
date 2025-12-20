import React, { useEffect, useRef } from "react";
import { FiUsers, FiGlobe, FiStar } from "react-icons/fi";
import { AiOutlineRocket } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import styles from "./home.module.css"; // CSS module

const ReasonsToWork = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          } else {
            entry.target.classList.remove(styles.animate); // remove when leaving view
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
    <section className={`py-5 bg-primary-custom`}>
      <div className="container text-center">
        <h2 className="mb-5 fw-light text-uppercase text-white">
          5 Reasons to Work With Us
        </h2>

        <div className="row g-4">
          {reasons.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg">
              <div
                className={`d-flex flex-column align-items-center ${styles.reasonItem}`}
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className="icon-wrapper mb-3">{item.icon}</div>
                <p className="small text-white mb-0 text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToWork;
