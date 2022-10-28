import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import "./navbario.css";
function NavbarIo() {
  return (
    <Container fluid className="nav-con-1">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/" className="nav-logo">
          <img src="Assets/logo-brandname.png" className="comp-logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-btn"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <div className="navbar-right-side">
              <div className="navbar-search-box">
                <BsSearch className="search-icon" />
                <input
                  type="search"
                  placeholder="SEARCH..."
                  className="input-search"
                />
              </div>
              <button className="login-button-block">
                <FaUserCircle className="user-icon" />
                <div className="login-button-text">Log In</div>
              </button>
              <GiShoppingBag className="user-icon" />
            </div> */}
          </Nav>
          <NavLink
            look="flat"
            component={Button}
            exact
            to="/"
            activeClassName="actived-link"
            className="links"
          >
            HOME
          </NavLink>
          <NavLink
            to="/products"
            look="flat"
            component={Button}
            activeClassName="actived-link"
            className="links"
          >
            PRODUCTS
          </NavLink>

          <NavLink
            to="/about-us"
            look="flat"
            component={Button}
            activeClassName="actived-link"
            className="links"
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact-us"
            look="flat"
            component={Button}
            activeClassName="actived-link"
            className="links"
          >
            CONTACT US
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarIo;
