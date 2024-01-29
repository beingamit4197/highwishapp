import React from "react";
import { Row } from "react-flexbox-grid";
import "../styles/checkbox.css";
const Checkbox = ({ title, subtitle, onClick, isChecked, checkCircle }) => {
  return (
    <div>
      <Row between="xs">
        <label style={{ marginTop: "1rem" }}>
          <input
            className={checkCircle ? "checkbox-with-circle" : ""}
            type="checkbox"
            checked={isChecked}
            onChange={onClick}
          />
          {title && (
            <span
              style={{
                marginLeft: "1rem",
                fontWeight: isChecked ? "bolder" : "normal",
                color: "var(--header-color)",
              }}
            >
              {title}
            </span>
          )}
        </label>
        {subtitle && (
          <p
            style={{
              marginRight: "1rem",
              fontWeight: isChecked ? "bolder" : "normal",
              color: "var(--header-color)",
            }}
          >
            {subtitle}
          </p>
        )}
      </Row>
    </div>
  );
};

export default Checkbox;
