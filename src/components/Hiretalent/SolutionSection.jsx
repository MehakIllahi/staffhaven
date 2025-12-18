// --------------------------------------------
// Third Section Component ("But there is a solution...")
// --------------------------------------------
import solutionImage from "../../assets/img9.jpg";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
export function SolutionSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <div className="col-md-6 mb-4 mb-md-0">
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

            <button className="bg-primary-custom rounded-pill px-4 py-2">
              Get in touch →
            </button>
          </div>

          {/* Right: Image */}
          <div className="col-md-6">
            <ProgressiveImage
              src={solutionImage}
              alt="solution visual"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
