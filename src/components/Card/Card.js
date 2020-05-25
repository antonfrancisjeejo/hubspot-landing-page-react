import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/button";
import "./Card.css";

const Card = ({ title, content, feature1, feature2, feature3, children }) => {
  return (
    <div className="card">
      <h4 className="card-title">
        {children} {title}
      </h4>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <hr className="card-divider" style={{ marginLeft: "40px" }} />
      <div className="card-lower">
        <h4 className="card-subtitle">POPULAR FEATURES</h4>
        <div>
          <div className="card-features">
            <CheckCircleIcon
              style={{
                color: "rgb(179, 67, 39)",
                opacity: 0.8,
                fontSize: 20,
              }}
            />
            <p className="card-feature-name">{feature1}</p>
          </div>
          <div className="card-features">
            <CheckCircleIcon
              style={{
                color: "rgb(179, 67, 39)",
                opacity: 0.8,
                fontSize: 20,
              }}
            />
            <p className="card-feature-name">{feature2}</p>
          </div>
          <div className="card-features">
            <CheckCircleIcon
              style={{
                color: "rgb(179, 67, 39)",
                opacity: 0.8,
                fontSize: 20,
              }}
            />
            <p className="card-feature-name">{feature3}</p>
          </div>
        </div>
      </div>
      <div
        style={{ textAlign: "center", marginBottom: "50px", marginTop: "20px" }}
      >
        <Button variant="danger" className="card-button">
          {title === "Free HubSpot CRM" ? "Get free CRM" : "Get started"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
