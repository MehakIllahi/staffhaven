import { Offcanvas } from "react-bootstrap";
import { useCanvas } from "./CanvasContext";

export default function GlobalCanvas() {
  const { showCanvas, closeCanvas } = useCanvas();

  return (
    <Offcanvas show={showCanvas} onHide={closeCanvas} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold fs-3">Let's Talk</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body
        className="text-center d-flex flex-column justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <h2 className="fw-bold mb-3">Ready. Steady. Hire.</h2>
        <p className="text-muted mb-4">
          Stop wasting time — let's find you some talent!
        </p>

        <div
          className="mb-4 p-3 shadow-sm rounded-4"
          style={{ background: "#f8f9fa" }}
        >
          <i className="bi bi-envelope-fill fs-4 text-primary"></i>
          <h5 className="mt-2 mb-0">info@thisisnoa.com</h5>
        </div>

        <div
          className="mb-4 p-3 shadow-sm rounded-4"
          style={{ background: "#f8f9fa" }}
        >
          <i className="bi bi-telephone-fill fs-4 text-primary"></i>
          <h5 className="mt-2 mb-0">01908 010390</h5>
        </div>

        <p className="mt-4 text-muted">We're here to help — anytime!</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
