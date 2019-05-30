import React from "react";
import NavButton from "./NavButton";
import { Collapse, NavbarToggler } from "reactstrap";

export default class NavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar smallNav">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            E-commerce
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="nav navbar-nav ml-auto">
              <NavButton route={"/"} action={"Home"} key={"Home"} />
              <NavButton
                route={"/contacts"}
                action={"Contact Us"}
                key={"Contacts"}
              />
              <NavButton route={"/items"} action={"Catalog"} key={"Items"} />
            </ul>
          </Collapse>
        </div>
      </nav>
    );
  }
}
