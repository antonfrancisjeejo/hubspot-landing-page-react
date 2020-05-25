import React from "react";
import "./Advancement.css";
import Button from "react-bootstrap/button";

const Advancement = () => {
  return (
    <div className="about">
      <div className="companies">
        <div className="customers">
          <h1 className="about-content" style={{ fontSize: "45px" }}>
            78,700
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 2 }}>
            customers in over <span style={{ fontWeight: "bold" }}>120</span>{" "}
            countries growing their businesses with HubSpot
          </p>
        </div>
        <div>
          <div className="companies-1">
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/Atlassian-horizontal-blue@2x.png"
              alt="atlassian"
              className="img-1"
            />
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/doordash_owler_20181011_194113_original@2x.png"
              alt="doordash"
              className="img-2"
            />
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/g2crowd-logo@2x.png"
              alt="crowd"
              className="img-3"
            />
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/homepage/Vertical_Sabaeus_RGB.svg"
              alt="surveymonkey"
              className="img-4"
            />
          </div>
          <div className="companies-1">
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/Subaru_Logo_v2_186x63@2x.png"
              alt="subaru"
              className="img-5"
            />
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/Wistia_logo@2x.png"
              alt="wistia"
              className="img-6"
            />
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/Classpass-logo@2x.png"
              alt="classpass"
              className="img-7"
            />
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/home/home_page_logos_June_2019/VMware_logo_gry_RGB_300dpi@2x.png"
              alt="vmware"
              className="img-8"
            />
          </div>
        </div>
      </div>
      <div class="about-1">
        <div className="about-block">
          <h1 className="about-content">Start Growing With HubSpot Today</h1>
          <p style={{ lineHeight: 2 }}>
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with inbound has
            never been easier.
          </p>
          <Button variant="danger" className="free-about-button">
            Get HubSpot free
          </Button>
          <p className="free-about">
            Get started with FREE tools, and upgrade as you grow.
          </p>
        </div>
        <img
          src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/Variation-1@2x.png"
          alt="customer"
          className="customer-image"
        />
      </div>
    </div>
  );
};

export default Advancement;
