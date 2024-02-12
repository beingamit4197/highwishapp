import React from "react";
import Space from "./UIassests/Space";
import { Grid } from "react-flexbox-grid";
import logoWhite from "../Assets/Highwish Logo White.png";
import "./styles/footer.css";
const Footer = () => {
  return (
    <>
      <Grid>
        <div
          style={{
            background: "black",
            height: "100%",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Space lg />
          <img
            src={logoWhite}
            alt=""
            style={{ width: "250px", height: "300px" }}
          />
          <p style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}>
            HighWishApp
          </p>
          <Space lg />
          <h1 style={{ color: "white" }}>Contact Us</h1>
          <p>Feel free to reach out to us at</p>
          <Space />
          <p className="footer-info">product@highwishapps.com</p>
          <p className="footer-info">admin@highwishapps.com</p>
          <Space lg />
          <Space lg />
        </div>
      </Grid>
    </>
  );
};

export default Footer;
