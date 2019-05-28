import React from "react";
import "./AdminLoginForm.css";
import {
  InputGroup,
  Button,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

export default class AdminLogInForm extends React.Component {
  render() {
    return (
      <div className="Form">
        <h1>Admin Log-In Form</h1>
        <InputGroup>
          <Input placeholder="email" />
        </InputGroup>
        <br />
        <InputGroup>
          <Input placeholder="password" />
        </InputGroup>
        <br />
        <Button color="primary" className="AdminLogInFormButton">
          Log In
        </Button>{" "}
      </div>
    );
  }
}
