import React from "react";
import "../styles/why_us.css";
import { Col, Grid, Row } from "react-flexbox-grid";
import svg from "../../Assets/svgs/customization.svg";
import Space from "../UIassests/Space";

const WhyUs = () => {
  return (
    <Grid>
      <div>
        <h2 className="why-us-header">Why Choose HighWishApps?</h2>
        <Space />
        <Row between="center">
          <Col md={8}>
            {" "}
            <ul>
              <li>
                <strong>Expertise:</strong> Our team consists of highly skilled
                professionals with years of experience in developing
                cutting-edge digital solutions.
              </li>
              <li>
                <strong>Custom Solutions:</strong> We understand that every
                business is unique. That's why we tailor our solutions to meet
                your specific needs and requirements.
              </li>
              <li>
                <strong>Innovative Approach:</strong> We stay ahead of the curve
                by embracing the latest technologies and trends to deliver
                innovative and forward-thinking solutions.
              </li>
              <li>
                <strong>Collaborative Process:</strong> We believe in
                collaboration and transparency. Throughout the development
                process, we keep you involved and informed every step of the
                way.
              </li>
              <li>
                <strong>Proven Track Record:</strong> With a portfolio of
                successful projects and satisfied clients, we have a proven
                track record of delivering results that exceed expectations.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Your satisfaction is our
                top priority. We go above and beyond to ensure that you are
                happy with the final product and the overall experience of
                working with us.
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <Row center="xs">
              <img src={svg} alt="" className="why-us-svg" />
            </Row>
          </Col>
        </Row>
      </div>
    </Grid>
  );
};

export default WhyUs;
