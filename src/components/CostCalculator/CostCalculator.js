import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import "../styles/costCalculator.css";
import CostAnalysis from "./CostAnalysis";
import Tabs, { Tab } from "../UIassests/Tabs";
import WebQuestions from "./WebQuestions";
import Footer from "../Footer";
import Space from "../UIassests/Space";
import IosQuestions from "./iOSQuestions";
import AndroidQuestions from "./AndroidQuestions";

const CostCalculator = () => {
  const [totalDays, setTotalDays] = useState(0);
  const [labelType, setLabelType] = useState("Web");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleReset = () => {
  //   setTotalDays(0);
  //   const icon = document.querySelector(".fas.fa-arrows-rotate");
  //   if (icon) {
  //     icon.classList.add("rotate-360");
  //   }
  // };

  return (
    <>
      <Grid>
        <h1 style={{ textAlign: "center" }}>
          Cost Calculator
          {/* {totalDays > 0 ? (
            <span className="fas fa-arrows-rotate" onClick={handleReset} />
          ) : (
            ""
          )} */}
        </h1>
        <Row>
          <Col md={8}>
            <h2>Features</h2>
            <p>Please select the features you want in your app?</p>
            <p>
              All estimates are approximate but should give you a rough idea of
              what it will take to build your app.
            </p>
            <Tabs>
              <Tab label="Web App" onClick={() => setLabelType("Web")}>
                <WebQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                />
              </Tab>
              <Tab label="iOS App" onClick={() => setLabelType("iOS")}>
                <IosQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                />
              </Tab>
              <Tab label="Android App" onClick={() => setLabelType("Android")}>
                <AndroidQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col md={4}>
            <CostAnalysis labelType={labelType} totalDays={totalDays} />
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
