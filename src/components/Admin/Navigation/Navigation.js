import React from "react";
import NewProduct from "../Product/NewProduct";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

export default class Navigation extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">SiteName</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/admin/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/categories">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/contacts">Contacts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/transactions">Transactions</NavLink>
              </NavItem>
              <NavItem>
                <NewProduct buttonLabel="+" />
              </NavItem>
              <Button onClick={this.props.signout}>Log out</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
