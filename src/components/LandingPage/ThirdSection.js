import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import human1 from "../../Assets/humaaans/sitting-8.png";
import human2 from "../../Assets/humaaans/standing-2.png";
import human3 from "../../Assets/humaaans/standing-3.png";
import human4 from "../../Assets/humaaans/standing-10.png";
import human5 from "../../Assets/humaaans/standing-16.png";
import human6 from "../../Assets/humaaans/standing-22.png";
import { isMobile } from "../UIassests/GeneralActions";

const ThirdSection = () => {
  return (
    <>
      <Grid>
        <div style={{ textAlign: "center" }}>
          <h1>Why choose us?</h1>
          <p>There are few reasons you to choose us which are listed below</p>
        </div>
        <Space lg />
        <Space lg />
        <Row center="xs">
          <Col md={4} sm={12}>
            <div
              style={{
                borderRadius: "30px",
                background: "var(--card-background)",
                boxShadow: "0px 20px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: isMobile ? "300px" : "250px",
                height: "400px",
                flexShrink: 0,
                margin: "auto",
              }}
            >
              <img src={human1} alt="" className="humans-img-card" />

              <p style={{ fontSize: "15px", textAlign: "left" }}>
                <h3>Expertise and Experience</h3>
                Benefit from our team's extensive expertise and years of
                experience in web and mobile app development. We bring a wealth
                of knowledge to the table, ensuring your project is in capable
                hands.
              </p>
            </div>
          </Col>
          <Col md={4}>
            {" "}
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "30px",
                background: "var(--card-background)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: isMobile ? "300px" : "250px",
                margin: "auto",
                height: "400px",
                flexShrink: 0,
                marginTop: isMobile ? "5rem" : "",
              }}
            >
              <img src={human2} alt="" className="humans-img-card" />

              <p style={{ fontSize: "15px", textAlign: "left" }}>
                <h3>Innovative Solutions</h3>
                Work with a team that thrives on innovation. We don't just
                deliver solutions; we provide innovative approaches that set
                your project apart, ensuring it stands out in today's
                competitive digital landscape.
              </p>
            </div>
          </Col>
          <Col md={4}>
            {" "}
            <div
              style={{
                borderRadius: "30px",
                background: "var(--card-background)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: isMobile ? "300px" : "250px",
                margin: "auto",
                height: "400px",
                flexShrink: 0,
                marginTop: isMobile ? "5rem" : "",
              }}
            >
              <img src={human3} alt="" className="humans-img-card" />

              <p style={{ fontSize: "15px", textAlign: "left" }}>
                <h3>Client-Centric Approach</h3>
                Experience a service tailored to your needs. Our client-centric
                approach means open communication, a keen understanding of your
                goals, and a commitment to delivering solutions that align with
                your vision.
              </p>
            </div>
          </Col>
        </Row>
        <Space lg />
        <Space lg />
        <Row center="xs">
          <Col md={4}>
            {" "}
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "30px",
                background: "var(--card-background)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: isMobile ? "300px" : "250px",
                margin: "auto",
                height: "400px",
                // flexShrink: 0,
              }}
            >
              <img src={human4} alt="" className="humans-img-card" />

              <p style={{ fontSize: "15px", textAlign: "left" }}>
                <h3>Quality Assurance</h3>
                Rest easy knowing that quality is at the forefront of our work.
                Rigorous testing and quality assurance processes are embedded in
                our development cycle, ensuring a seamless, bug-free experience
                for your users.
              </p>
            </div>
          </Col>
          <Col md={4}>
            {" "}
            <div
              style={{
                borderRadius: "30px",
                background: "var(--card-background)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: isMobile ? "300px" : "250px",
                margin: "auto",
                height: "400px",
                flexShrink: 0,
                marginTop: isMobile ? "5rem" : "",
              }}
            >
              <img src={human5} alt="" className="humans-img-card" />

              <p style={{ fontSize: "15px", textAlign: "left" }}>
                <h3>Timely Delivery</h3>
                We value your time as much as you do. With a commitment to
                timely delivery, you can trust us to meet deadlines and
                milestones, ensuring your project progresses smoothly and
                efficiently.
              </p>
            </div>
          </Col>
          <Col md={4}>
            {" "}
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "30px",
                background: "var(--card-background)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: isMobile ? "300px" : "250px",
                margin: "auto",
                height: "400px",
                flexShrink: 0,
                marginTop: isMobile ? "5rem" : "",
              }}
            >
              <img src={human6} alt="" className="humans-img-card" />

              <p style={{ fontSize: "15px", textAlign: "left" }}>
                <h3>Continuous Support</h3>
                Our relationship doesn't end with project delivery. Enjoy
                continuous support and maintenance services, ensuring your
                application remains up-to-date, secure, and ready to adapt to
                future technological advancements.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default ThirdSection;
