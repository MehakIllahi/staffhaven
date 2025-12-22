import React, { useState } from "react";
import TalkToUsOffcanvas from "../common/TalkToUsOffcanvas";
import { Link } from "react-router-dom";
import Styles from "./Hiretalent.module.css";

const heroImage = "imgg3.jpg";

export default function HiringSection() {
  const [showTalk, setShowTalk] = useState(false);

  return (
    <section className="py-5 bg-primary-custom">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-md-6 text-white text-center text-md-start mb-4 mb-md-0">
            <small className="btn btn-outline-light btn-sm mb-3">
              Hire Talent
            </small>

            <h1 className="display-5 fw-bold" style={{ lineHeight: 1.05 }}>
              Facing Hiring
              <br />
              Challenges?
            </h1>

            <p className="mt-4 opacity-75">
              Many companies find themselves frustrated by the lengthy process
              of sourcing the right talent.
            </p>
            <p className="opacity-75">
              Others are concerned about the rising costs of recruitment and
              question whether it’s truly a worthwhile investment.
            </p>
            <p className="opacity-75">
              Some have even grown doubtful about their recruiters, uncertain if
              they can consistently deliver high-quality candidates.
            </p>

            <div className="mt-3 d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
              <Link to="/about">
                <button
                  className={`btn btn-light rounded-pill ${Styles.homerevpagebtn}`}
                >
                  Find Out How →
                </button>
              </Link>

              <button
                className={`btn btn-outline-light rounded-pill ${Styles.homepagebtn}`}
                onClick={() => setShowTalk(true)}
              >
                Get in Touch →
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6">
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 420 }}
            >
              <img
                src={heroImage}
                alt="office"
                className="img-fluid rounded"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
              />

              {/* FLOATING CARD 1 – hidden on mobile */}
              <div
                className={`card ${Styles.profileCard} d-none d-md-block`}
                style={{ top: "8%", right: "-12%", position: "absolute" }}
              >
                <div className="card-body text-center">
                  <img
                    src={heroImage}
                    alt="profile"
                    className="rounded-circle mb-2"
                    style={{ width: 54, height: 54, objectFit: "cover" }}
                  />
                  <h6 className="mb-0">Simon Lin</h6>
                  <small className="text-muted">Solutions Architect</small>
                </div>
              </div>

              {/* FLOATING CARD 2 – hidden on mobile */}
              <div
                className={`card ${Styles.profileCard} d-none d-md-block`}
                style={{ bottom: "18%", left: "-6%", position: "absolute" }}
              >
                <div className="card-body text-center">
                  <img
                    src={heroImage}
                    alt="profile2"
                    className="rounded-circle mb-2"
                    style={{ width: 48, height: 48, objectFit: "cover" }}
                  />
                  <h6 className="mb-0">Christina Davis</h6>
                  <small className="text-muted">Software Engineer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TalkToUsOffcanvas show={showTalk} onClose={() => setShowTalk(false)} />
    </section>
  );
}
