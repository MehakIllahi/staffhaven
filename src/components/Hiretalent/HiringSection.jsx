import React from "react";

// A single-file React component using Bootstrap's container / row / col
// It references the uploaded image at the provided local path.

const heroImage = "../../../public/imgg3.jpg";

export default function HiringSection() {
  return (
    <section className="py-5 bg-primary-custom">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column: headline + copy + buttons */}
          <div className="col-md-6 text-white">
            <small className="btn btn-outline-light btn-sm mb-3">
              Hire Talent
            </small>
            <h1 className="display-5 fw-bold" style={{ lineHeight: 1.05 }}>
              Struggling with
              <br />
              These Hiring
              <br />
              Challenges?
            </h1>

            <p className="mt-4 opacity-75">
              Many of our clients feel overwhelmed by how long it takes to find
              the right talent.
            </p>
            <p className="opacity-75">
              Others are shocked by the high costs of recruitment, wondering if
              it's really worth the investment.
            </p>
            <p className="opacity-75">
              Some have even lost faith in their recruiters, unsure if they can
              deliver the quality candidates.
            </p>

            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-light rounded-pill px-4">
                We Can Help - Find Out How →
              </button>
              <button className="btn btn-outline-light rounded-pill px-4">
                Get in Touch →
              </button>
            </div>
          </div>

          {/* Right column: image with overlay cards */}
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

              {/* Floating profile cards - absolute positioned */}
              <div
                className="card profile-card"
                style={{ top: "8%", right: "-12%" }}
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

              <div
                className="card profile-card"
                style={{ bottom: "18%", left: "-6%" }}
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

      {/* Inline styles for the floating profile cards and responsive tweaks */}
      <style>{`
        .profile-card {
          position: absolute;
          width: 160px;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        /* Position adjustments for smaller screens */
        @media (max-width: 767px) {
          section { padding-top: 3rem; padding-bottom: 3rem; }
          .profile-card { display: none; }
        }

        /* keep buttons compact on mobile */
        @media (max-width: 991px) {
          .display-5 { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
