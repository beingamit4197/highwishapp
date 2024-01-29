import React, { useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Expander from "../Expander/Expander";
import Button from "../UIassests/Button";
import phone2 from "../../Assets/Illustration 2.png";
import { isMobile } from "../UIassests/GeneralActions";

const SecondSection = () => {
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
              <p>Empowering Your Digital Success: Our Comprehensive Services</p>
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
            <div
              style={{
                display: isMobile ? "flex" : "",
                justifyContent: "center",
              }}
            >
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

export default SecondSection;
