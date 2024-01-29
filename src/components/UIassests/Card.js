import React from "react";
import "../styles/card.css";
import { Grid } from "react-flexbox-grid";

const Card = ({ children, withBorder }) => {
  return (
    <Grid>
      <div className={`humans-card ${withBorder ? "with-border" : ""}`}>
        {children}
      </div>
    </Grid>
  );
};

export default Card;
