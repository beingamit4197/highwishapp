import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import "../styles/costCalculator.css";
import CostAnalysis from "./CostAnalysis";
import Tabs, { Tab } from "../UIassests/Tabs";
import WebQuestions from "./WebQuestions";
import Footer from "../Footer";
import Space from "../UIassests/Space";
import IosQuestions from "./iOSQuestions";

const CostCalculator = () => {
  const [totalDays, setTotalDays] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Grid>
        <h1 style={{ textAlign: "center" }}>Cost Calculator</h1>
        <Row>
          <Col md={8}>
            <h2>Features</h2>
            <p>Please select the features you want in your app?</p>
            <Tabs>
              <Tab label="Web App">
                <WebQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                />
              </Tab>
              <Tab label="iOS App">
                <IosQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                />
              </Tab>
              <Tab label="Android App"></Tab>
            </Tabs>
          </Col>
          <Col md={4}>
            <CostAnalysis totalDays={totalDays} />
          </Col>
        </Row>
      </Grid>
      <Space lg />
      <Space lg />
      <Footer />
    </>
  );
};

export default CostCalculator;
