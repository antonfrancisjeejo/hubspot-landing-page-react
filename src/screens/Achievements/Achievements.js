import React from "react";
import "./Achievements.css";
const Achievements = () => {
  return (
    <div className="achievements">
      <div className="moto-full">
        <div className="moto">
          <h2 className="moto-title">
            Learn and grow with award-winning support and a thriving community
            behind you.
          </h2>
          <p className="moto-content">
            You don't have to go it alone. Master the inbound methodology and
            get the most out of your tools with HubSpot's legendary customer
            support team and a community of thousands of marketing and sales
            pros just like you.
          </p>
        </div>
        <div>
          <div className="row-1">
            <div className="row-contents">
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg"
                alt="hand"
              />
              <h1>
                150
                <span>+</span>
              </h1>
              <p className="moto-content">HubSpot user groups</p>
            </div>
            <div className="row-contents">
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg"
                alt="blog"
              />
              <h1>
                7M
                <span>+</span>
              </h1>
              <p className="moto-content">monthly visits</p>
            </div>
            <div className="row-contents">
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg"
                alt="academy"
              />
              <h1>
                248K
                <span>+</span>
              </h1>
              <p className="moto-content">certified professionals</p>
            </div>
            <div className="row-contents">
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg"
                alt="bound"
              />
              <h1>26K</h1>
              <p className="moto-content">registered attendees</p>
            </div>
          </div>
          <hr className="divide" />
          <div className="row-2">
            <div className="row-contents">
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_connect.svg"
                alt="connect"
              />
              <h1>
                400
                <span>+</span>
              </h1>
              <p className="moto-content">integrations</p>
            </div>
            <div className="row-contents" style={{ marginLeft: "40px" }}>
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg"
                alt="language"
              />
              <h1>6</h1>
              <p className="moto-content">languages</p>
            </div>
            <div className="row-contents" style={{ marginLeft: "45px" }}>
              <img
                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg"
                alt="social"
              />
              <h1>
                2.6M
                <span>+</span>
              </h1>
              <p className="moto-content">social followers</p>
            </div>
            <div className="row-contents">
              <img
                src="https://www.hubspot.com/hubfs/growthhub-white-small-1.svg"
                alt="bound"
              />
              <h1>
                5K<span>+</span>
              </h1>
              <p className="moto-content">profiles and counting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
