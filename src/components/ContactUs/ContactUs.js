import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
// import API from "./Api";

export default class CreateNewItem extends React.Component {

  handleSubmit = event =>{
    event.preventDefault()
    let newRequest = {
      subject : event.target.subject.value,
      message : event.target.message.value,
      email : event.target.email.value,
      name : event.target.name.value,
    }
   this.handleRequest(newRequest)
  }

  handleRequest = request => {
    fetch("http://localhost:3000/contacts", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(request)
    }) .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(response => {
        alert("Message Submitted!");
    }).catch(error => {
        console.log("Oops. Something went wrong..try again.");
    });
  }


  render() {
    return (
      <Form className="itemForm" onSubmit={this.handleSubmit}>
        <Row>
        <Col lg="6">
        <FormGroup>
          <Label for="examplePassword">Please tell us your name</Label>
          <Input type="textfield" name="name" id="name"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Please select one of the following</Label>
          <Input type="select" name="subject" id="exampleSelect">
            <option>I ordered the wrong item/at wrong address</option>
            <option>I want to ask for a Refund</option>
            <option>My item did not Arrived</option>
            <option>My problem is not listed here</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Please provide your e-mail</Label>
          <Input type="textfield" name="email" id="examplePassword" placeholder="email@example.com" />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col lg="6">
        <FormGroup>
          <Label for="exampleText">Extra Information</Label>
          <Input type="textarea" name="message" id="exampleText" />
        </FormGroup>
        <Button color="primary btn btn-outline-light btn-lg" type="Submit">Submit</Button>
        </Col>
        </Row>
      </Form>
    );
  }
}
