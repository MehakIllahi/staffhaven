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
              Is Your Time Being Wasted?
            </h2>

            <p className="text-muted mb-3">
              Finding the right tech talent can quickly become a huge time sink.
            </p>
            <p className="text-muted mb-3">
              Endless resumes from unqualified candidates fill your inbox,
              leaving you sifting through irrelevant profiles and sending
              countless rejection emails.
            </p>
            <p className="text-muted mb-3">
              Even a straightforward hire can drag on for weeks if the right
              candidates aren’t interested or available.
            </p>
            <p className="text-muted mb-4">
              Do you really have time to spend like that?
            </p>

            <button className="bg-primary-custom rounded-pill px-4 py-2">
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
