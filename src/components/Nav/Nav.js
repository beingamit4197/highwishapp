import React, { useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Button from "../UIassests/Button";
import logoBlack from "../../Assets/HighWish Logo Black.png";
import "../styles/nav.css";

const Nav = () => {
  const toggleTheme = () =>
    localStorage.getItem("theme") === "dark" ? "light" : "dark";

  const [themeIcon, setIcon] = useState(
    localStorage.getItem("theme") === "dark" ? "fas fa-moon" : "fas fa-sun"
  );

  const themeSetter = (theme) => {
    if (theme === "light") {
      setIcon("fas fa-moon");
      let body = document.getElementsByClassName("default")[0];
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      setIcon("fas fa-sun");
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
          <Col lg={4} md={4} sm={4}>
            <a href="/">
              <img src={logoBlack} alt="" />
            </a>
          </Col>
          <Col lg={5} md={5} sm={6}>
            <Row>
              <div className="nav-items">Services</div>
              <div className="nav-items">Why us?</div>
              <div className="nav-items">Pricing</div>
            </Row>
          </Col>
          <Col lg={3} md={3} sm={4} style={{ textAlign: "center" }}>
            <Row>
              <Button fullRound withBorder>
                Let's Connect
              </Button>
              <Button
                circle
                withBorder
                onClick={() => {
                  themeSetter(toggleTheme());
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    color: "var(--logo-color)",
                  }}
                  className={themeIcon}
                  to="#"
                ></span>{" "}
              </Button>
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Nav;
