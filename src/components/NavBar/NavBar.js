import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/button";
import SearchIcon from "@material-ui/icons/Search";
import CustomNavBar from "../CustomNavBar/CustomNavBar";

const NavBars = () => {
  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="top-nav"
        fixed="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="English"
              id="collasible-nav-dropdown1"
              className="drop-down1"
            >
              <NavDropdown.Item href="#action/3.1">Espanol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Portuguese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Francais</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Sales</Nav.Link>
          </Nav>
          <SearchIcon className="search-button" />
          <Button variant="outline-danger" className="login-button">
            Log in
          </Button>
          <Button variant="danger" className="free-button">
            Get HubSpot free
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <CustomNavBar />
    </nav>
  );
};

export default NavBars;
