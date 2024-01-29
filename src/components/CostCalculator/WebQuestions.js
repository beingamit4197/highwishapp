import React, { useState } from "react";
import Expander from "../Expander/Expander";
import { Grid } from "react-flexbox-grid";
import Checkbox from "../UIassests/Checkbox";
import { isMobile } from "../UIassests/GeneralActions";

const WebQuestions = ({ totalDays, setTotalDays }) => {
  const webQuestions = [
    {
      label: "How big is your app?",
      answers: [
        {
          label: "Small",
          days: 15,
        },
        {
          label: "Medium",
          days: 12,
        },
        {
          label: "Large",
          days: 20,
        },
      ],
    },
    {
      label: "What level of UI would you like?",
      answers: [
        {
          label: "Basic MVP",
          days: 15,
        },
        {
          label: "Medium",
          days: 12,
        },
        {
          label: "Polished",
          days: 20,
        },
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
        { label: "User Invitation Emails", days: 2 },
        { label: "Multi-tenant Accounts", days: 3 },
        { label: "Subdomains", days: 4 },
        { label: "Custom Domains", days: 4 },
      ],
    },
    {
      label: "User Generated Content",
      answers: [
        { label: "Dashboard", days: 5 },
        { label: "Activity Feed", days: 4 },
        { label: "File Uploading", days: 4 },
        { label: "User Profiles", days: 2 },
        { label: "Transactional Emails", days: 2 },
        { label: "Tags", days: 2 },
        { label: "Ratings or Reviews", days: 5 },
        { label: "Audio/Video Processing", days: 5 },
        { label: "Free Text Searching", days: 2 },
      ],
    },
    {
      label: "Dates & Locations",
      answers: [
        { label: "Calendaring", days: 7 },
        { label: "Display of Map data / Geolocation", days: 3 },
        { label: "Display of custom map markers/regions", days: 3 },
        { label: "Bookings", days: 5 },
      ],
    },
    {
      label: "Social & Engagement",
      answers: [
        { label: "Messaging", days: 6 },
        { label: "Forums or Commenting", days: 5 },
        { label: "Social Sharing", days: 2 },
        { label: "Push to Facebook Open Graph", days: 5 },
      ],
    },
    {
      label: "Billing & eCommerce",
      answers: [
        { label: "Subscription Plans", days: 8 },
        { label: "Payment Processing", days: 5 },
        { label: "Shopping Cart", days: 8 },
        { label: "User Marketplace", days: 12 },
        { label: "Product Management", days: 7 },
      ],
    },
    {
      label: "Admin, Feedback & Analytics",
      answers: [
        { label: "CMS Integration", days: 7 },
        { label: "User Admin Pages", days: 3 },
        { label: "Moderation / Content Approval", days: 4 },
        { label: "Intercom", days: 3 },
        { label: "Usage Analytics", days: 3 },
        { label: "Crash Reporting", days: 0 },
        { label: "Performance Monitoring", days: 1 },
        { label: "Multilingual Support", days: 2 },
      ],
    },
    {
      label: "External APIs and Integrations",
      answers: [
        { label: "Connect to Third-Party Services", days: 6 },
        { label: "API for Integration", days: 8 },
        { label: "SMS Messaging", days: 4 },
        { label: "Phone Number Masking", days: 4 },
      ],
    },
    {
      label: "Security",
      answers: [
        { label: "SSL Certificate based Security", days: 3 },
        { label: "DoS Protection", days: 5 },
        { label: "Two-Factor Authentication", days: 5 },
      ],
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
      {webQuestions.map((q) => (
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

export default WebQuestions;
