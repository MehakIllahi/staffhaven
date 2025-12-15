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
              But there is a solution...
            </h2>

            <p className="text-muted mb-3">We breathe tech recruiting.</p>

            <p className="text-muted mb-3">
              Our team of specialists are constantly nurturing their talent
              pools so that when our customers need us we are able to swiftly
              and accurately present a tailored shortlist of engaged and fully
              qualified talent.
            </p>

            <p className="text-muted mb-4">
              Oh, and we charge fairly and openly.
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
