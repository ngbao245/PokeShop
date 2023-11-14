import { useState } from "react";
import { Form, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/styles/loginModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginModal: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Valid email required")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav>
        <Button variant="success" onClick={handleShow}>
          <span className="fw-bold text-white">Login &gt;</span>
        </Button>
      </Nav>
      <Modal show={show} onHide={handleClose}>
        <div className="container">
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="card p-4 shadow-lg">
              <header className="mb-4 text-center">
                <h2>Enter your email</h2>
              </header>
              <section>
                <Form.Group className="mb-3">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="success" className="fw-bold">
                    Sign up or Sign in
                  </Button>
                </div>
              </section>
              <div className="separator my-3 text-center">or</div>

              <Button variant="outline-secondary" className="fw-bold">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="google-photo"></span>
                  <div className="ms-2">Continue with Google</div>
                </div>
              </Button>
            </div>
          </Modal.Body>
          {/* <div className="d-grid gap-1 p-2">
            <Button variant="primary" size="lg">
              Block level button
            </Button>
          </div> */}
        </div>
      </Modal>
    </>
  );
};
