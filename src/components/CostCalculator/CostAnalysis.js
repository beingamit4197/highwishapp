import React, { useState } from "react";
import { Grid, Row } from "react-flexbox-grid";
import Button from "../UIassests/Button";
import { sendEmail } from "../UIassests/EmailEngine";
import Space from "../UIassests/Space";
import "../styles/costAnalysis.css";

const CostAnalysis = ({
  totalDays,
  setTotalDays,
  labelType,
  selectedAnswers,
}) => {
  const [emailValue, setEmailValue] = useState("");
  // const [emailValid, setEmailValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleClick = () => {
    let body = "";
    Object.entries(selectedAnswers).forEach(([question, answers]) => {
      body += `${question}\n`;
      answers.forEach((answer) => {
        body += `${answer.label} - ${answer.days} days\n`;
      });
      body += "\n";
    });

    const emailData = {
      email: emailValue,
      to_name: emailValue,
      from_name: "HighWishApp",
      message: body,
    };
    const template = "highWishApp_Template";

    sendEmail(emailData, template)
      .then(() => {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSending(false);
      });
  };

  const handleInputChange = (e) => {
    setEmailValue(e.target.value);
    const email = e.target.value;
    setEmailValue(email);
    // const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // setEmailValid(isValid);
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
              style={{ width: "100%", marginTop: "5px" }}
              onClick={handleClick}
            >
              {isSending ? "Sending..." : `Send ${labelType} Estimate`}
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
