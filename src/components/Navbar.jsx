import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavbarComp = () => {
  const { auth, setAuth } = useAuth();

  const handleLogOut = async (e) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setAuth("");
      console.log(auth);
    } catch (err) {
      console.log(err);
    }
  };

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
              <Link className="nav-link" to={`/offers`}>
                Offers
              </Link>
              <Link className="nav-link" to={`/contactUs`}>
                Contact Us
              </Link>
              <NavDropdown title="Currency" id="basic-nav-dropdown">
                <Link className="dropdown-item" to={`/currency/pound`}>
                  Pound
                </Link>
                <Link className="dropdown-item" to={`/currency/euro`}>
                  Euro
                </Link>
                <Link className="dropdown-item" to={`/currency/dollar`}>
                  Dollar
                </Link>
              </NavDropdown>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <Link className="dropdown-item" to={``}>
                  English
                </Link>
                <Link className="dropdown-item" to={``}>
                  Arabic
                </Link>
                <Link className="dropdown-item" to={``}>
                  German
                </Link>
              </NavDropdown>
              {auth?.token ? (
                <Link className="nav-link" to={`/signIn`}>
                  <span className="d-block" onClick={handleLogOut}>
                    Sign Out
                  </span>
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to={`/signIn`}>
                    Sign In
                  </Link>
                  <Link className="nav-link" to={`/signUp`}>
                    Sign Up
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
