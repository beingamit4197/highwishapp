import React from "react";
import { Grid, Row } from "react-flexbox-grid";

const CostAnalysis = ({ totalDays }) => {
  return (
    <>
      <Grid>
        <h2 style={{ textAlign: "center" }}>Cost Analysis</h2>
        <Row between="xs">
          <p>App Type</p>
          <h3>Web</h3>
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
      </Grid>
    </>
  );
};

export default CostAnalysis;
