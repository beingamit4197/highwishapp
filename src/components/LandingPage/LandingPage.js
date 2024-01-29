import React from "react";
import Space from "../UIassests/Space";
import Footer from "../Footer";
import "../styles/landingPage.css";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Prices from "./Prices";

function LandingPage() {
  return (
    <>
      <FirstSection />
      <Space lg />
      <Space lg />
      <SecondSection />
      <Space lg />
      <ThirdSection />
      <Space lg />
      <Prices />
      <Space lg />
      <Footer />
    </>
  );
}

export default LandingPage;
