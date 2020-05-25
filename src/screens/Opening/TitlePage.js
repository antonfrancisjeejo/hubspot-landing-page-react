import React from "react";
import "./TitlePage.css";
import Button from "react-bootstrap/button";
const Titlepage = () => {
  return (
    <div className="top-content">
      <img
        src="https://cdn2.hubspot.net/hubfs/53/raw_assets/public/_Web%20Team%20Assets/Website/assets/svg/hero.svg"
        alt="Norway"
        className="top-image"
      />
      <div className="text-block">
        <h1 className="title-content">There's a better way to grow.</h1>
        <p>
          Marketing, sales, and service software that helps your business grow
          without compromise. Because “good for the business” should also mean
          “good for the customer.
        </p>
        <Button variant="danger" className="title-button">
          Get HubSpot free
        </Button>
        <p className="started">
          Get started with FREE tools, and upgrade as you grow.
        </p>
      </div>
    </div>
  );
};

export default Titlepage;
