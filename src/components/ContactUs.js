import React, { useEffect } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SVGs from "./UIassests/SVG";
import Space from "./UIassests/Space";
import Header from "./UIassests/Header";
import Footer from "./Footer";
import "./styles/contactUs.css";
import Button from "./UIassests/Button";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const formFields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
    },
  ];

  return (
    <>
      <Grid>
        <Space lg />
        <Row>
          <Col
            style={{
              background: "var(--card-background)",
              padding: "40px",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
            md={4}
          >
            <Header>Get in touch!</Header>
            <p>Feel free to contact us at your convenience.</p>
            <SVGs xl type={"contact_us"} />
          </Col>
          <Col
            style={{
              background: "var(--card-color)",
              padding: "20px",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
            md={8}
          >
            <h1>Contact Us</h1>
            <p>
              We encourage you to reach out to us should you have any inquiries
              or ideas for improvement.
            </p>
            <Space />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid>
                    {formFields.map((field, index) => (
                      <Row className="form-group" key={index}>
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.type === "textarea" ? (
                          <Field
                            as="textarea"
                            name={field.name}
                            rows="5"
                            style={{
                              borderRadius: "20px",
                              border: "1px solid var(--card-color)",
                            }}
                            className={`form-control ${
                              errors[field.name] && touched[field.name]
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                        ) : (
                          <Field
                            type={field.type}
                            name={field.name}
                            style={{
                              borderRadius: "20px",
                              border: "1px solid var(--card-color)",
                            }}
                            className={`form-control ${
                              errors[field.name] && touched[field.name]
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                        )}
                        {errors[field.name] && touched[field.name] && (
                          <div className="invalid-feedback">
                            {errors[field.name]}
                          </div>
                        )}
                      </Row>
                    ))}
                    <Button fullRound type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Space lg />
        <Space lg />
      </Grid>
      <Footer />
    </>
  );
};

export default ContactUs;
