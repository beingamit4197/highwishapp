import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import { Link } from "react-router-dom";
import Button from "../UIassests/Button";
import { isMobile } from "../UIassests/GeneralActions";

const Prices = () => {
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
                border: "1px solid var(--main-font-color)",
                borderRadius: "30px",
                background: "var(--card-color)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "25px",
                width: "350px",
                height: "350px",
                flexShrink: 0,
                textAlign: "center",
              }}
            >
              <h2>Individual Contractor</h2>
              <p>All prices all for an hour</p>
              <Space />
              <Row between="xs">
                <p className="paragraph" style={{ fontWeight: "bold" }}>
                  UI/UX Designer
                </p>
                <h3>$20</h3>
              </Row>
              <Row between="xs">
                <p className="paragraph" style={{ fontWeight: "bold" }}>
                  Frontend Developer
                </p>
                <h3>$20</h3>
              </Row>{" "}
              <Row between="xs">
                <p className="paragraph" style={{ fontWeight: "bold" }}>
                  Backend Developer
                </p>
                <h3>$20</h3>
              </Row>{" "}
              <Row between="xs">
                <p className="paragraph" style={{ fontWeight: "bold" }}>
                  FullStack Developer
                </p>
                <h3>$20</h3>
              </Row>
            </div>
          </Col>
          <Col
            md={6}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div
              style={{
                borderRadius: "30px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "25px",
                width: "350px",
                height: "350px",
                flexShrink: 0,
                textAlign: "center",
                lineHeight: "100%",
                background: "#F2F2F2",
                marginTop: isMobile ? 50 : "",
              }}
            >
              <h2 style={{ color: "var(--prime-card-background)" }}>
                Product Development
              </h2>
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
                  color: "var(--prime-card-background",
                }}
              >
                Calculate an estimated cost with our product cost calculator
              </p>
              <Link to={"/cost_calculator"}>
                <Button
                  style={{
                    backgroundColor: "var(--prime-card-background)",
                    color: "white",
                    bottom: isMobile ? "10px" : "",
                  }}
                  fullRound
                >
                  Open Cost Calculator
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Space lg />
        <Space lg />
      </Grid>
    </>
  );
};

export default Prices;
