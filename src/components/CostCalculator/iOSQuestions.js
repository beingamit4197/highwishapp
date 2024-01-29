import React, { useState } from "react";
import Expander from "../Expander/Expander";
import { isMobile } from "../UIassests/GeneralActions";
import { Grid } from "react-flexbox-grid";
import Checkbox from "../UIassests/Checkbox";

const IosQuestions = ({ totalDays, setTotalDays }) => {
  const iOSQuestions = [
    {
      label: "How big is your app?",
      answers: [
        { label: "Small", days: 10 },
        { label: "Medium", days: 30 },
        { label: "Large", days: 50 },
      ],
    },
    {
      label: "What level of UI would you like?",
      answers: [
        { label: "MVP", days: 30 },
        { label: "Basic", days: 50 },
        { label: "Polished", days: 70 },
      ],
    },
    {
      label: "Users & Accounts",
      answers: [
        { label: "Email / Password Sign Up", days: 1 },
        { label: "Facebook Sign Up", days: 2 },
        { label: "Twitter Sign Up", days: 2 },
        { label: "Google Sign Up", days: 2 },
        { label: "LinkedIn Sign Up", days: 2 },
        { label: "Github Sign Up", days: 2 },
      ],
    },
    {
      label: "User Generated Content",
      answers: [
        { label: "Activity Feed", days: 4 },
        { label: "Media Uploading", days: 4 },
        { label: "User Profiles", days: 2 },
        { label: "Tags", days: 2 },
        { label: "Ratings or reviews", days: 5 },
        { label: "Media Manipulation", days: 7 },
        { label: "Searching", days: 3 },
      ],
    },
    {
      label: "Mobile specific features",
      answers: [
        { label: "App Icon Design", days: 7 },
        { label: "Cloud Syncing", days: 5 },
        { label: "Device Sensor Data", days: 5 },
        { label: "Barcodes or QR Codes", days: 2 },
        { label: "Health Data", days: 4 },
        { label: "Apple Watch", days: 7 },
      ],
    },
    {
      label: "Dates & Locations",
      answers: [
        { label: "Calendaring", days: 6 },
        { label: "Display of Map data / Geolocation", days: 3 },
        { label: "Display of custom map markers/regions", days: 3 },
        { label: "Bookings", days: 5 },
      ],
    },
    {
      label: "Social & Engagement",
      answers: [
        { label: "Messaging", days: 5 },
        { label: "Forums or commenting", days: 5 },
        { label: "Social Sharing", days: 1 },
        { label: "Push to Facebook Open Graph", days: 3 },
        { label: "Push Notifications", days: 3 },
      ],
    },
    {
      label: "Billing & eCommerce",
      answers: [
        { label: "Shopping Cart", days: 5 },
        { label: "In-App Purchasing", days: 5 },
        { label: "Payment Information Collection", days: 3 },
        { label: "Payment processing", days: 5 },
      ],
    },
    {
      label: "Admin, Feedback & Analytics",
      answers: [
        { label: "Intercom", days: 3 },
        { label: "Usage Analytics", days: 3 },
        { label: "Crash Reporting", days: 1 },
        { label: "Multilingual Support", days: 4 },
      ],
    },
    {
      label: "External APIs and Integrations",
      answers: [
        { label: "Connect to one or more third party services", days: 3 },
        { label: "SMS Messaging", days: 4 },
        { label: "Phone Number Masking", days: 4 },
      ],
    },
    {
      label: "Security",
      answers: [{ label: "Two Factor Authentication", days: 5 }],
    },
    {
      label: "App Specific Development",
      answers: [
        { label: "App Specific Development", days: 1 },
        { label: "Project Manager", days: 1 },
      ],
    },
  ];

  const [expandedExpander, setExpandedExpander] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleExpanderToggle = (expanderTitle) => {
    setExpandedExpander((prevExpanded) =>
      prevExpanded === expanderTitle ? null : expanderTitle
    );
  };

  const handleCheckboxChange = (groupLabel, answer) => {
    if (!isChecked[groupLabel]?.[answer.label]) {
      setTotalDays(totalDays + answer.days);
    } else {
      setTotalDays(totalDays - answer.days);
    }
    // console.log({ totalDays, days: answer.days });
    setIsChecked((prev) => {
      const groupState = { ...prev[groupLabel] };
      groupState[answer.label] = !groupState[answer.label];
      return { ...prev, [groupLabel]: groupState };
    });
  };

  return (
    <>
      {iOSQuestions.map((q) => (
        <div style={{ maxWidth: isMobile ? "" : "80%" }}>
          <Expander
            subTitle={q.label}
            expanded={expandedExpander === q.label}
            onToggle={() => handleExpanderToggle(q.label)}
          >
            {q.answers.map((a) => (
              <>
                <Grid key={a.label}>
                  <Checkbox
                    title={a.label}
                    subtitle={a.days}
                    onClick={() => handleCheckboxChange(q.label, a)}
                    isChecked={isChecked[q.label]?.[a.label] || false}
                    checkCircle
                  />
                </Grid>
              </>
            ))}
          </Expander>
        </div>
      ))}
    </>
  );
};

export default IosQuestions;
