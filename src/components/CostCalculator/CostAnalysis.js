import React from "react";
import { Grid, Row } from "react-flexbox-grid";

const CostAnalysis = ({ totalDays, appType }) => {
  return (
    <>
      <Grid>
        <h2 style={{ textAlign: "center" }}>Cost Analysis</h2>
        <Row between="xs">
          <p>App Type</p>
          <h3>{appType ? "" : "Web"}</h3>
        </Row>
        <Row between="xs">
          <p>Total Days</p>
          <h3>{totalDays}</h3>
        </Row>{" "}
        <Row between="xs">
          <p>Hours Per Day</p>
          <h3>$8</h3>
        </Row>{" "}
        <Row className="border-bottom" between="xs">
          <p>Per Hours Price</p>
          <h3>$15</h3>
        </Row>
        <Row className="border-bottom" between="xs">
          <h3>Total Price</h3>
          <h3>${totalDays * 8 * 15}</h3>
        </Row>
        <Row>
          <p style={{ fontWeight: "lighter", fontSize: "0.8rem" }}>
            <strong>Please note : </strong> all cost estimates are intended to
            be indicative of development costs and timescales only and are
            exclusive of all hosting costs, paid services or purchased assets of
            any kind. All prices are in USD and inclusive of sales tax.
          </p>
        </Row>
      </Grid>
    </>
  );
};

export default CostAnalysis;
