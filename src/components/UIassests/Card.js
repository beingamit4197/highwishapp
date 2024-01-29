import React from "react";
import "../styles/card.css";

const Card = ({ children, withBorder }) => {
  return (
    <div className={`humans-card ${withBorder ? "with-border" : ""}`}>
      {children}
    </div>
  );
};

export default Card;
