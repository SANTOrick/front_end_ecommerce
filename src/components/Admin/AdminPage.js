import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

export default class AdminPage extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  render() {
    return (
      <Nav>
        <Container>
          <Row>
            <Col sm="12" lg="12" md="6">
              Admin's Control page
            </Col>
          </Row>
          <Row>
            <Col sm="6" lg="6" md="6">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Current Filter?</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Sort By Price</DropdownItem>
                  <DropdownItem>Sort By Category</DropdownItem>
                  <DropdownItem>Sort By Items Sold</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col />
          </Row>
        </Container>
      </Nav>
    );
  }
}
