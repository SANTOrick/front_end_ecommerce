import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
// import API from "./Api";

export default class CreateNewItem extends React.Component {

  handleSubmit = event =>{
    event.preventDefault()
    let newRequest = {
      name : event.target.issue.value,
      extraInfo : event.target.extraInfo.value,
      email : event.target.email.value
    }
   console.log(newRequest)
  }

  handleRequest = request => {
    fetch("this"+"/contact", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(request)
    })
  }


  render() {
    return (
      <Form className="itemForm" onSubmit={this.handleSubmit}>
        <Row>
        <Col lg="6">
        <FormGroup>
          <Label for="exampleEmail">Please select one of the following</Label>
          <Input type="select" name="issue" id="exampleSelect">
            <option>I ordered the wrong item/at wrong address</option>
            <option>I want to ask for a Refund</option>
            <option>My item did not Arrived</option>
            <option>My problem is not listed here</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Pelase provide your e-mail</Label>
          <Input type="textfield" name="email" id="examplePassword" placeholder="email@example.com" />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col lg="6">
        <FormGroup>
          <Label for="exampleText">Extra Information</Label>
          <Input type="textarea" name="extraInfo" id="exampleText" />
        </FormGroup>
        <Button color="primary btn btn-outline-light btn-lg" type="Submit">Submit</Button>
        </Col>
        </Row>
      </Form>
    );
  }
}
