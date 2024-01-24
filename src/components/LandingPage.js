import React, { useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "./UIassests/Space";
import Footer from "./Footer";
import Button from "./UIassests/Button";
import Expander from "./Expander/Expander";
import phone1 from "../Assets/Illustration1.png";
import phone2 from "../Assets/Illustration 2.png";
import human1 from "../Assets/humaaans/sitting-8.png";
import human2 from "../Assets/humaaans/standing-2.png";
import human3 from "../Assets/humaaans/standing-3.png";
import human4 from "../Assets/humaaans/standing-10.png";
import human5 from "../Assets/humaaans/standing-16.png";
import human6 from "../Assets/humaaans/standing-22.png";

export const FirstSection = () => {
  return (
    <>
      <Grid>
        <Row>
          <Col md={6}>
            <Space lg />
            <Space lg />
            <div>
              <h1>Transform your DREAMS into REALITY</h1>
              <p
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  color: "#37363B",
                  fonSize: "60px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                At HighWishApps, we transform visions into reality, crafting
                bespoke digital solutions that elevate your business to new
                heights.
              </p>
            </div>
            <Space />
            <div>
              <Button fullRound>Contact Us</Button>
              <Button withBorder fullRound>
                Learn More
              </Button>
            </div>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              display: "flex",
            }}
            md={6}
          >
            <img
              src={phone1}
              alt=""
              style={{ width: "250px", height: "500px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export const SecondSection = () => {
  const [expandedExpander, setExpandedExpander] = useState(null);

  const handleExpanderToggle = (expanderTitle) => {
    setExpandedExpander((prevExpanded) =>
      prevExpanded === expanderTitle ? null : expanderTitle
    );
  };
  return (
    <>
      <Grid>
        <Row>
          <Col
            style={{
              justifyContent: "center",
              display: "flex",
            }}
            md={6}
          >
            <img
              src={phone2}
              alt=""
              style={{ width: "250px", height: "500px", objectFit: "contain" }}
            />
          </Col>
          <Col md={6}>
            <div>
              <h1>Services we offer</h1>
              <p
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  color: "#37363B",
                  fonSize: "60px",
                  fontWeight: 500,
                }}
              >
                Empowering Your Digital Success: Our Comprehensive Services
              </p>
            </div>
            <Space />
            <div>
              <Row style={{ borderBottom: "1px solid #A7A7A7" }}>
                <Col md={12} xs={12}>
                  <Expander
                    subTitle={"UI/UX Design"}
                    expanded={expandedExpander === "UI/UX Design"}
                    onToggle={() => handleExpanderToggle("UI/UX Design")}
                  >
                    <ul style={{ marginLeft: 5, lineHeight: "2rem" }}>
                      <li>
                        Customized user interface design to enhance user
                        experience.
                      </li>
                      <li>
                        Wireframing and prototyping for intuitive user
                        interaction.
                      </li>
                      <li>
                        Collaboration with clients to understand brand
                        aesthetics and user preferences.
                      </li>
                      <li>
                        Implementation of responsive design principles for
                        seamless cross-device experiences.
                      </li>
                    </ul>
                  </Expander>
                </Col>
              </Row>
              <Row style={{ borderBottom: "1px solid #A7A7A7" }}>
                <Col md={12} xs={12}>
                  <Expander
                    subTitle={"Mobile App Development"}
                    expanded={expandedExpander === "Mobile App Development"}
                    onToggle={() =>
                      handleExpanderToggle("Mobile App Development")
                    }
                  >
                    <ul style={{ marginLeft: 5, lineHeight: "2rem" }}>
                      <li>
                        Native app development for iOS and Android platforms.
                      </li>
                      <li>
                        Cross-platform development using frameworks like React
                        Native or Flutter.
                      </li>
                      <li>
                        Integration of essential features such as push
                        notifications and geolocation services.
                      </li>
                      <li>
                        User-friendly interfaces with a focus on performance and
                        reliability.
                      </li>
                    </ul>
                  </Expander>
                </Col>
              </Row>

              <Row style={{ borderBottom: "1px solid #A7A7A7" }}>
                <Col md={12} xs={12}>
                  <Expander
                    subTitle={"Website Development"}
                    expanded={expandedExpander === "Website Development"}
                    onToggle={() => handleExpanderToggle("Website Development")}
                  >
                    <ul style={{ marginLeft: 5, lineHeight: "2rem" }}>
                      <li>
                        Front-end development using modern web technologies
                        (HTML, CSS, JavaScript).
                      </li>
                      <li>
                        Back-end development with frameworks like Node.js or
                        Ruby on Rails.
                      </li>
                      <li>
                        Content Management System (CMS) integration for easy
                        content updates.
                      </li>
                      <li>
                        SEO optimization and performance tuning for fast loading
                        times.
                      </li>
                    </ul>
                  </Expander>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <Expander
                    subTitle={"Desktop Software Development"}
                    expanded={
                      expandedExpander === "Desktop Software Development"
                    }
                    onToggle={() =>
                      handleExpanderToggle("Desktop Software Development")
                    }
                  >
                    <ul style={{ marginLeft: 5, lineHeight: "2rem" }}>
                      <li>
                        Development of desktop applications for Windows, macOS,
                        or Linux.
                      </li>
                      <li>
                        Utilization of technologies like Electron for
                        cross-platform compatibility.
                      </li>
                      <li>
                        Implementation of robust features tailored to client
                        requirements.
                      </li>
                      <li>
                        Regular updates and maintenance to ensure software
                        security and stability.
                      </li>
                    </ul>
                  </Expander>
                </Col>
              </Row>
            </div>
            <Space lg />
            <div>
              <Button fullRound>Contact Us</Button>
              <Button withBorder fullRound>
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export const ThirdSection = () => {
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
          <Col md={4}>
            <div
              style={{
                borderRadius: "30px",
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: "250px",
                height: "400px",
                flexShrink: 0,
              }}
            >
              <img
                src={human1}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  top: "-15%",
                  position: "relative",
                  margin: "0",
                  objectFit: "contain",
                }}
              />

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
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: "250px",
                height: "400px",
                flexShrink: 0,
              }}
            >
              <img
                src={human2}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  position: "relative",
                  top: "-15%",
                  objectFit: "contain",
                }}
              />

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
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: "250px",
                height: "400px",
                flexShrink: 0,
              }}
            >
              <img
                src={human3}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  top: "-15%",
                  position: "relative",
                  margin: 0,
                  objectFit: "contain",
                }}
              />

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
        <Row center="sm">
          <Col md={4}>
            {" "}
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "30px",
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: "250px",
                height: "400px",
                flexShrink: 0,
              }}
            >
              <img
                src={human4}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  position: "relative",
                  top: "-15%",
                  objectFit: "contain",
                }}
              />

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
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: "250px",
                height: "400px",
                flexShrink: 0,
              }}
            >
              <img
                src={human5}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  position: "relative",
                  top: "-15%",
                  objectFit: "contain",
                }}
              />

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
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "20px",
                width: "250px",
                height: "400px",
                flexShrink: 0,
              }}
            >
              <img
                src={human6}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  position: "relative",
                  top: "-15%",
                  objectFit: "contain",
                }}
              />

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

export const Prices = () => {
  return (
    <>
      <Grid>
        <div style={{ textAlign: "center" }}>
          <h1>Prices</h1>
          <p>Two simple modes of payments</p>
        </div>
        <Space lg />
        <Space />
        <Row>
          <Col
            md={6}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "30px",
                background: "#FFF",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "25px",
                width: "350px",
                height: "350px",
                flexShrink: 0,
                textAlign: "center",
                lineHeight: "100%",
              }}
            >
              <h2>Individual Contractor</h2>
              <p>All prices all for an hour</p>
              <Space />
              <Row between="lg">
                <p style={{ color: "#6E6E6E", fontWeight: "bold" }}>
                  UI/UX Designer
                </p>
                <h3>$20</h3>
              </Row>
              <Row between="lg">
                <p style={{ color: "#6E6E6E", fontWeight: "bold" }}>
                  Frontend Developer
                </p>
                <h3>$20</h3>
              </Row>{" "}
              <Row between="lg">
                <p style={{ color: "#6E6E6E", fontWeight: "bold" }}>
                  Backend Developer
                </p>
                <h3>$20</h3>
              </Row>{" "}
              <Row between="lg">
                <p style={{ color: "#6E6E6E", fontWeight: "bold" }}>
                  FullStack Developer
                </p>
                <h3>$20</h3>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                borderRadius: "30px",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
                padding: "25px",
                width: "350px",
                height: "350px",
                flexShrink: 0,
                textAlign: "center",
                lineHeight: "100%",
                background: "#F2F2F2",
              }}
            >
              <h2>Product Development</h2>
              <Space lg />
              <Space />
              <i
                className="fas fa-2xl fa-calculator"
                style={{
                  transform: "rotate(35.175deg)",
                  fontSize: "100px",
                  color: "#848484",
                }}
              ></i>
              <Space />
              <p
                style={{
                  fontSize: "25px",
                  lineHeight: "normal",
                }}
              >
                Calculate an estimated cost with our product cost calculator
              </p>
              <Button fullRound>Open Cost Calculator</Button>
            </div>
          </Col>
        </Row>
        <Space lg />
        <Space lg />
        <Space lg />
      </Grid>
    </>
  );
};

function LandingPage() {
  return (
    <>
      <FirstSection />
      <Space lg />
      <Space lg />
      <SecondSection />
      <Space lg />
      <ThirdSection />
      <Space lg />
      <Prices />
      <Space lg />
      <Footer />
    </>
  );
}

export default LandingPage;
