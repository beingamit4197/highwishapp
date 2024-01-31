import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Button from "../UIassests/Button";
import phone1 from "../../Assets/Illustration1.png";
import { isMobile } from "../UIassests/GeneralActions";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid>
        <Row>
          <Col md={6}>
            <Space lg />
            <Space lg />
            <div>
              <h1>Transform your DREAMS into REALITY</h1>
              <p>
                At HighWishApps, we transform visions into reality, crafting
                bespoke digital solutions that elevate your business to new
                heights.
              </p>
            </div>
            <Space />
            <div
              style={{
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Button fullRound onClick={() => navigate("/contact_us")}>
                Contact Us
              </Button>
              <Button withBorder fullRound onClick={() => navigate("/why_us")}>
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

export default FirstSection;
