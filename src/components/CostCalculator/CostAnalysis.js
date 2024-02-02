import React, { useState, useEffect } from "react";
import { Grid, Row } from "react-flexbox-grid";
import Button from "../UIassests/Button";
import { sendEmail } from "../UIassests/EmailEngine";
import Space from "../UIassests/Space";
import "../styles/costAnalysis.css";

const CostAnalysis = ({ totalDays, setTotalDays, labelType }) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isSending) {
      const emailData = {
        email: emailValue,
        from_name: "HighWishApp",
        message: `Your Estimated Value Price: $${
          totalDays * 8 * 15
        } for ${totalDays} days, $8 per hour, $15 per hour.`,
      };
      const template = "highWishApp_Template";

      sendEmail(emailData, template)
        .then(() => {
          setIsSending(false);
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setIsSending(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSending]);

  const handleClick = () => {
    if (emailValid && totalDays !== 0 && !isSending) {
      setIsSending(true);
    }
  };

  const handleInputChange = (e) => {
    setEmailValue(e.target.value);
    const email = e.target.value;
    setEmailValue(email);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailValid(isValid);
  };
  console.log("Email Value", emailValue);

  return (
    <>
      <Grid>
        <div style={{ position: "sticky" }}>
          <h2 style={{ textAlign: "center" }}>Cost Analysis </h2>
          <Row between="xs">
            <p>App Type</p>
            <h3>{labelType}</h3>
          </Row>
          <Row between="xs">
            <p>Total Days</p>
            <h3>{totalDays}</h3>
          </Row>{" "}
          <Row between="xs">
            <p>Hours Per Day</p>
            <h3>8</h3>
          </Row>{" "}
          <Row className="border-bottom" between="xs">
            <p>Per Hours Price</p>
            <h3>$15</h3>
          </Row>
          <Row className="border-bottom" between="xs">
            <h3>Total Price</h3>
            <h3>${totalDays * 8 * 15}</h3>
          </Row>
          <Space />
          <Row>
            <input
              className="mail-input"
              type="email"
              placeholder="Enter Your Email"
              value={emailValue}
              onChange={handleInputChange}
            />
            <Button
              disabled={!emailValid || totalDays === 0 || isSending}
              style={{ width: "100%", marginTop: "5px" }}
              onClick={handleClick}
            >
              {isSending ? "Sending..." : "Send Estimate"}
            </Button>
          </Row>
          {isSent && (
            <Row>
              <p style={{ color: "green", marginTop: "-5%" }}>
                Estimate sent successfully!
              </p>
            </Row>
          )}
          <Row>
            <p style={{ fontWeight: "lighter", fontSize: "0.8rem" }}>
              <strong>Please note : </strong> all cost estimates are intended to
              be indicative of development costs and timescales only and are
              exclusive of all hosting costs, paid services or purchased assets
              of any kind. All prices are in USD and inclusive of sales tax.
            </p>
          </Row>
        </div>
      </Grid>
    </>
  );
};

export default CostAnalysis;
