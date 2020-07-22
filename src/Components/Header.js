import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <Navbar dark expand="md">
            <div className="container header">
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="assets/images/logo.png"
                  height="40"
                  width="41"
                  alt="TV Series Quiz"
                />
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <button type="submit">
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="submit">
                    <NavLink className="nav-link" to="/menu">
                      <span className="fa fa-bars fa-lg"></span> Menu
                    </NavLink>
                  </button>
                </NavItem>
              </Nav>
            </div>
          </Navbar>
          <div className="container">
            <center>
              <h1>Series Trivia</h1>
              <p>
                These days, the small screen has some very big things to offer.
                From sitcoms to dramas to travel and talk shows, these are all
                the best programs on TV.
              </p>
            </center>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
