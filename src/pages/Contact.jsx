import { useState } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";

export default function ContactSlide() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* 🔵 This is the button you click to open the slide */}
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      {/* 🌟 Offcanvas Slide */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ready. Steady. Hire.</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <p>Stop wasting time and let’s find you some talent!</p>

          <p>
            <strong>Email:</strong> info@thisisnoa.com
          </p>
          <p>
            <strong>Phone:</strong> 01908 010390
          </p>

          <hr />

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
