import React, { useEffect } from "react";
import "../styles/why_us.css";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Card from "../UIassests/Card";
import Header from "../UIassests/Header";
import Footer from "../Footer";
import SVGs from "../UIassests/SVG";

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <Grid>
      <div>
        <h2 className="why-us-header">Why Choose HighWishApps?</h2>
        <Space md />
        <Row between="center">
          <Col md={6}>
            <Card horizontal>
              <Row>
                <Col md={8} xs={10}>
                  <Header> Expertise</Header>
                  Our team consists of highly skilled professionals with years
                  of experience in developing cutting-edge digital solutions.
                </Col>
                <Col md={4} xs={2}>
                  <SVGs className={"card-SVG"} type="customization" />
                </Col>
              </Row>
            </Card>
            <Card horizontal>
              <Row>
                <Col md={8} xs={10}>
                  <Header> Custom Solutions</Header>
                  We understand that every business is unique. That's why we
                  tailor our solutions to meet your specific needs and
                  requirements.
                </Col>
                <Col md={4} xs={2}>
                  <SVGs type="solution" />
                </Col>
              </Row>
            </Card>
            <Card horizontal>
              <Row>
                <Col md={8} xs={10}>
                  <Header> Innovative Approach</Header>
                  We stay ahead of the curve by embracing the latest
                  technologies and trends to deliver innovative and
                  forward-thinking solutions.
                </Col>
                <Col md={4} xs={2}>
                  <SVGs type="innovative" />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6}>
            <Card horizontal>
              <Row>
                <Col md={8} xs={10}>
                  <Header> Proven Track Record</Header>
                  With a portfolio of successful projects and satisfied clients,
                  we have a proven track record of delivering results that
                  exceed expectations.
                </Col>
                <Col md={4} xs={2}>
                  <SVGs type="tracking" />
                </Col>
              </Row>
            </Card>
            <Card horizontal>
              <Row>
                <Col md={8} xs={10}>
                  <Header>Customer Satisfaction</Header>
                  Your satisfaction is our top priority. We go above and beyond
                  to ensure that you are happy with the final product and the
                  overall experience of working with us.
                </Col>
                <Col md={4} xs={2}>
                  <SVGs type="happy" />
                </Col>
              </Row>
            </Card>
            <Card horizontal>
              <Row>
                <Col md={8} xs={10}>
                  <Header> Collaborative Process</Header>
                  We believe in collaboration and transparency. Throughout the
                  development process, we keep you involved and informed every
                  step of the way.
                </Col>
                <Col md={4} xs={2}>
                  <SVGs type="teamwork" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <Space lg />
      <Footer />
    </Grid>
  );
};

export default WhyUs;
