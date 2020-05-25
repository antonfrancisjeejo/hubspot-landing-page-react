import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="spacing">
        <div className="total-row">
          <div className="col-2">
            <h3 className="footer-title">Increase Your Traffic</h3>
            <a href="https://www.hubspot.com/">Ad Software</a>
            <a href="https://www.hubspot.com/">Blog Software</a>
            <a href="https://www.hubspot.com/">SEO Software</a>
            <a href="https://www.hubspot.com/">Social Media Software</a>
            <a href="https://www.hubspot.com/">Content Management Software</a>
          </div>
          <div className="col-2">
            <h3 className="footer-title">Connect With Leads</h3>
            <a href="https://www.hubspot.com/">Find New Prospects</a>
            <a href="https://www.hubspot.com/">Email Tracking</a>
            <a href="https://www.hubspot.com/">Sales Email Templates</a>
            <a href="https://www.hubspot.com/">Click to Call Your Leads</a>
            <a href="https://www.hubspot.com/">Email Marketing</a>
          </div>
          <div className="col-2">
            <h3 className="footer-title">Close and Manage Leads</h3>
            <a href="https://www.hubspot.com/">Document Tracking Tool</a>
            <a href="https://www.hubspot.com/">Meeting Schedule Tool</a>
            <a href="https://www.hubspot.com/">Sales Automation Tool</a>
            <a href="https://www.hubspot.com/">Lead Management Tool</a>
            <a href="https://www.hubspot.com/">Pipeline Management Tool</a>
          </div>
          <div className="col-2">
            <h3 className="footer-title">Support and Tools</h3>
            <a href="https://www.hubspot.com/">HubSpot Partners</a>
            <a href="https://www.hubspot.com/">Join a Local User Group</a>
            <a href="https://www.hubspot.com/">PieSync Integrations</a>
            <a href="https://www.hubspot.com/">HubSpot Templates</a>
            <a href="https://www.hubspot.com/">Free Tools & Generators</a>
            <Button variant="light" style={{ fontSize: "12px" }}>
              Contact HubSpot Support
            </Button>
          </div>
        </div>
        <div className="footer-icons">
          <LinkedInIcon className="footer-icon" />
          <TwitterIcon className="footer-icon" />
          <YouTubeIcon className="footer-icon" />
          <InstagramIcon className="footer-icon" />
          <FacebookIcon className="footer-icon" />
        </div>
        <div className="row2">
          <a href="https://www.hubspot.com/" className="languages">
            English
          </a>
          <a href="https://www.hubspot.com/" className="languages">
            Deutsh
          </a>
          <a href="https://www.hubspot.com/" className="languages">
            慰マざ
          </a>
          <a href="https://www.hubspot.com/" className="languages">
            Espanol
          </a>
          <a href="https://www.hubspot.com/" className="languages">
            Portugues
          </a>
          <a href="https://www.hubspot.com/" className="languages">
            Francais
          </a>
        </div>
      </div>
      <hr className="divide-line" />
      <div className="end-footer">
        <div>
          <img
            src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg"
            alt="logo"
          />
          <p className="copyright">Copyright &copy; 2020 HubSpot, Inc.</p>
        </div>
        <div>
          <a href="https://www.hubspot.com/" className="policy">
            Legal Stuff
          </a>
          <a href="https://www.hubspot.com/" className="policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
