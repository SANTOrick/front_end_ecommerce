import React from "react";
import "./AdminLoginForm.css";
import {
  InputGroup,
  Button,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Row
} from "reactstrap";
import API from "../../Api";

export default class AdminLogInForm extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    API.signin(this.state).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      } else {
        // user is authenticated!
        this.props.signin(this.state.username, data.token);
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="Form">
            <h1>Admin Log-In Form</h1>
            <InputGroup>
              <Input
                onChange={this.handleChange}
                placeholder="email"
                name="email"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                onChange={this.handleChange}
                placeholder="password"
                name="password"
              />
            </InputGroup>
            <br />
            <Button
              onClick={this.handleSubmit}
              color="primary"
              className="AdminLogInFormButton"
            >
              Log In
            </Button>
          </div>
        </Row>
      </Container>
    );
  }
}
