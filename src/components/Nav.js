import React, { useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "./UIassests/Space";
import Button from "./UIassests/Button";
import logoBlack from "../Assets/HighWish Logo Black.png";
import "./styles/nav.css";

const Nav = () => {
  const toggleTheme = () =>
    localStorage.getItem("theme") === "dark" ? "light" : "dark";

  const [themeIcon, setIcon] = useState(
    localStorage.getItem("theme") === "dark"
      ? "fas fa-xl fa-moon"
      : "fas fa-xl fa-sun"
  );

  const themeSetter = (theme) => {
    if (theme === "light") {
      setIcon("fas fa-xl fa-moon");
      let body = document.getElementsByClassName("default")[0];
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      setIcon("fas fa-xl fa-sun");
      let body = document.getElementsByClassName("default")[0];
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <Grid>
        <Space />
        <Row>
          <Col lg={4} md={4} sm={2}>
            <img src={logoBlack} alt="" />
          </Col>
          <Col
            lg={5}
            md={5}
            sm={6}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="nav-items">Services</div>
            <div className="nav-items">Why us?</div>
            <div className="nav-items">Pricing</div>
          </Col>
          <Col lg={3} md={3} sm={4} style={{ textAlign: "center" }}>
            <Button fullRound withBorder>
              Let's Connect
            </Button>
            <span
              style={{ cursor: "pointer", color: "var(--logo-color)" }}
              className={themeIcon}
              to="#"
              onClick={() => {
                themeSetter(toggleTheme());
              }}
            ></span>{" "}
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Nav;
