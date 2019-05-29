import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class ProductForm extends Component {
  state = {
    itemUpload: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:5000/api/artists")
      .then(response => {
        this.setState({ artists: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000//api/collections")
      .then(response => {
        this.setState({ collections: response.data });
        /*this.setState({
          itemUpload: Object.assign({}, this.state.itemUpload, {
            api: response.data
          })
        });*/
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("price", this.state.price);
    data.append("description", this.state.description);
    data.append("stock", this.state.stock);
    data.append("image", this.state.image);
    console.log(this.state);
    console.log(this.state.image);

    axios
      .post("http://localhost:3000/products", data)
      .then(response => {
        console.log(response);
        // setTimeout(() => {
        //   this.props.handler();
        //   this.emptyState();
        //   this.props.handler();
        // }, 500);
      })
      .catch(err => {
        console.log(err);
      });
    // this.setState({
    //   asd: Object.assign({}, this.state.asd, {
    //     ans: data
    //   })
    // });
    // console.log(this.state);
    //this.setState({ itemUpload: [...this.state.itemUpload, ...data] });
  };

  fileHandler = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleFormList = e => {
    console.log([e.target.value]);
    this.setState({ [e.target.name]: [e.target.value] });
  };

  render() {
    return (
      <Form className="row" id="formView" onSubmit={this.handleSubmit}>
        <FormGroup className="col-4 ">
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Product name"
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <FormGroup className="col-4 artistBorder">
          <Label for="price">Price</Label>
          <Input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <FormGroup className="col-4 artistBorder">
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Description"
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <FormGroup className="col-4 artistBorder">
          <Label for="stock">Stock</Label>
          <Input
            type="text"
            name="stock"
            id="stock"
            placeholder="stock"
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">File</Label>
          <Input
            onChange={this.fileHandler}
            type="file"
            name="image"
            id="image"
          />
        </FormGroup>
        <Button
          color="primary"
          type="submit"
          form="formView"
          onClick={this.toggle}
        >
          Upload
        </Button>
      </Form>
    );
  }
}

export default ProductForm;
