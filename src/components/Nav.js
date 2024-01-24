import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "./UIassests/Space";
import Button from "./UIassests/Button";
import logoBlack from "../Assets/HighWish Logo Black.png";

const Nav = () => {
  return (
    <>
      <Grid>
        <Space />
        <Row>
          <Col md={4}>
            <img src={logoBlack} alt="" />
          </Col>
          <Col md={6} style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 15,
                fontFamily: "Quicksand",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Services
            </div>
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 15,
                fontFamily: "Quicksand",
                fontWeight: "700",
                wordWrap: "break-word",
                marginLeft: "20px",
              }}
            >
              Why us?
            </div>
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 15,
                fontFamily: "Quicksand",
                fontWeight: "700",
                wordWrap: "break-word",
                marginLeft: "20px",
              }}
            >
              Pricing
            </div>
          </Col>
          <Col md={2}>
            <Button fullRound withBorder>
              Let's Connect{" "}
            </Button>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Nav;
