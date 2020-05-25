import React from "react";
import "./Feature.css";
import AdjustIcon from "@material-ui/icons/Adjust";
import DeviceHubRoundedIcon from "@material-ui/icons/DeviceHubRounded";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import Card from "../../components/Card/Card";
const Feature = () => {
  return (
    <div className="middle-content">
      <div className="top-features">
        <div className="feature-block">
          <h1 className="feature-content">Powerful alone. Better together.</h1>
          <p className="offer">
            HubSpot offers a full stack of software for marketing, sales, and
            customer service, with a completely free CRM at its core. They’re
            powerful alone — but even better when used together.
          </p>
        </div>
        <div className="card1">
          <Card
            title="Free HubSpot CRM"
            content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
            feature1="Contact Insights"
            feature2="Deals"
            feature3="Tasks"
          >
            <AdjustIcon />
          </Card>
        </div>
        <div className="card2">
          <Card
            title="CMS Hub"
            content="Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience."
            feature1="Drag-and-Drop Editor"
            feature2="SEO Recommendations"
            feature3="Website Themes"
          >
            <DeviceHubRoundedIcon />
          </Card>
        </div>
      </div>
      <div className="down-features">
        <div className="card3">
          <Card
            title="Marketing Hub"
            content="Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale."
            feature1="Lead Generation"
            feature2="Marketing Automation"
            feature3="Analytics"
          >
            <DeveloperBoardIcon />
          </Card>
        </div>
        <div className="card4">
          <Card
            title="Sales Hub"
            content="Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster."
            feature1="Email Tracking"
            feature2="Meeting Scheduling"
            feature3="Email Automation"
          >
            <MonetizationOnIcon />
          </Card>
        </div>
        <div className="card5">
          <Card
            title="Service Hub"
            content="Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business."
            feature1="Tickets"
            feature2="Customer Feedback"
            feature3="Knowledge Base"
          >
            <SupervisorAccountIcon />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feature;
