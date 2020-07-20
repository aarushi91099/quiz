import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <Navbar dark expand="md">
            <div className="container header">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="assets/images/logo1.png"
                  height="40"
                  width="41"
                  alt="TV Series Quiz"
                />
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/menu">
                      <span className="fa fa-bars fa-lg"></span> Menu
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <input
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button type="submit">Search</button>
                  </NavItem>
                </Nav>
              </Collapse>
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
