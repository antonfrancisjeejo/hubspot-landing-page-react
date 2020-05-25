import React from "react";
import "./CustomNavBar.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavBar = () => {
  return (
    <nav className="nav">
      <h3>HubSpot</h3>
      <ul className="nav-links">
        <NavDropdown
          title="Software"
          id="collasible-nav-dropdown"
          className="drop-down1"
        >
          <NavDropdown.Item href="#action/3.1">Espanol</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Portuguese</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Francais</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          href="#home"
          style={{ marginLeft: "5%" }}
          id="collasible-nav-dropdown"
        >
          Pricing
        </Nav.Link>
        <NavDropdown
          title="Resources"
          id="collasible-nav-dropdown"
          className="drop-down1"
        >
          <NavDropdown.Item href="#action/3.1">Espanol</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Portuguese</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Francais</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Partners"
          id="collasible-nav-dropdown"
          className="drop-down1"
        >
          <NavDropdown.Item href="#action/3.1">Espanol</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Portuguese</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Francais</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="About"
          id="collasible-nav-dropdown"
          className="drop-down1"
        >
          <NavDropdown.Item href="#action/3.1">Espanol</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Portuguese</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Francais</NavDropdown.Item>
        </NavDropdown>
      </ul>
    </nav>
  );
};

export default CustomNavBar;
