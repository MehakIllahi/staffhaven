import React, { useState } from "react";
import solutionImage from "../../assets/img9.jpg";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
import TalkToUsOffcanvas from "../common/TalkToUsOffcanvas";

export function SolutionSection() {
  const [showTalk, setShowTalk] = useState(false);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE – comes FIRST on mobile */}
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <ProgressiveImage
              src={solutionImage}
              alt="solution visual"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* TEXT – comes BELOW image on mobile */}
          <div className="col-md-6 order-2 order-md-1">
            <h2 className="fw-bold display-6 mb-4">
              But there’s a better way…
            </h2>

            <p className="text-muted mb-3">
              Recruiting is what we live and breathe.
            </p>

            <p className="text-muted mb-3">
              Our team of experts continuously cultivates their talent networks,
              so when you need the right people, we can quickly deliver a
              carefully curated shortlist of engaged, highly qualified
              candidates.
            </p>

            <p className="text-muted mb-4">
              And yes — our pricing is transparent and fair.
            </p>

            <button
              className="bg-primary-custom rounded-pill px-4 py-2"
              onClick={() => setShowTalk(true)}
            >
              Get in touch →
            </button>
          </div>
        </div>
      </div>

      <TalkToUsOffcanvas show={showTalk} onClose={() => setShowTalk(false)} />
    </section>
  );
}
