import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateNewItem extends React.Component {

  handleSubmit = event =>{
    event.preventDefault()
    let newItem = {
      name : event.target.name.value,
      price : event.target.price.value,
      image : event.target.image.value,
      bio : event.target.bio.value
    }
  this.props.addNewItem(newItem)
  }

  render() {
    return (
      <Form className="itemForm" onSubmit={this.handleSubmit}>
        <Row>
        <Col lg="6">
        <FormGroup>
          <Label for="exampleEmail">Item Name</Label>
          <Input name="name" id="exampleEmail" placeholder="Name..." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Price</Label>
          <Input type="textfield" name="price" id="examplePassword" placeholder="price" />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col lg="6">
        <FormGroup>
          <Label for="exampleText">Breef Description</Label>
          <Input type="textarea" name="bio" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="textfield" name="image" id="exampleFile" />
          <FormText color="muted">
            Please insert an image url.
          </FormText>
        </FormGroup>
        <Button color="primary btn btn-outline-light btn-lg" type="Submit">Submit</Button>
        </Col>
        </Row>
      </Form>
    );
  }
}
