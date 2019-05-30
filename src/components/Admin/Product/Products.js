import React, { Component } from "react";
import axios from "axios";
import { Table, Container } from "reactstrap";
import Product from "./Product";

class Products extends Component {
  state = {};

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get("http://localhost:3000/products")
      .then(res => this.setState({ products: res.data.data }))
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(res => this.fetchProducts())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h2 className="text-center">Products</h2>
        </div>
        <p>
          Number of products:
          {this.state.products ? this.state.products.length : "Loading..."}
        </p>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>On Stock</th>
              <th>Times purchased</th>
              <th>Upload time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products &&
              this.state.products.map((item, index) => {
                return (
                  <Product
                    product={item}
                    key={item.id}
                    index={index}
                    onDelete={this.deleteProduct}
                  />
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Products;
