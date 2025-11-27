import secondImage from "../../assets/img12.jpg";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
export function TimeToWasteSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <ProgressiveImage
              src={secondImage}
              alt="workspace"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Right: Text */}
          <div className="col-md-6">
            <h2 className="fw-bold display-6 mb-4">
              Do you have time to waste?
            </h2>

            <p className="text-muted mb-3">
              Hiring tech talent can be a serious drain on your time.
            </p>
            <p className="text-muted mb-3">
              Being flooded with unqualified (and irrelevant) profiles leaving
              you with a clogged inbox and writing endless rejection emails.
            </p>
            <p className="text-muted mb-3">
              A lack of interested candidates in your position could mean that a
              relatively simple hire ends up taking weeks to make.
            </p>
            <p className="text-muted mb-4">
              Do you have that sort of time to waste?
            </p>

            <button className="btn btn-primary rounded-pill px-4 py-2">
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
