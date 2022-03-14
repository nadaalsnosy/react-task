import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Navbar className="bottom-shadow" bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand fw-bold text-orange" to={`/`}>
              LOGO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to={`/users`}>
                Users
              </Link>
              <Nav.Link href="">Offers</Nav.Link>
              <Nav.Link href="">Contact Us</Nav.Link>

              <NavDropdown title="Currency" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Euro</NavDropdown.Item>
                <NavDropdown.Item href="">Pound</NavDropdown.Item>
                <NavDropdown.Item href="">Dollar</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="">English</NavDropdown.Item>
                <NavDropdown.Item href="">Arabic</NavDropdown.Item>
              </NavDropdown>

              <Link className="nav-link" to={`/signIn`}>
                Sign In
              </Link>
              <Link className="nav-link" to={`/signUp`}>
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
