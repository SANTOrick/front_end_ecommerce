import React, { Component } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import "./Items.css";

class ItemsPage extends Component {
  state = {
    items: null
  };

  componentWillMount() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        this.setState({ items: response.data.data });
      })
      .catch(error => {
        console.log(error);
        console.log(this.state);
      });
  }

  render() {
    console.log(this.state.items)
    if (!this.state.items) {
      return (
        <div style={{ minHeight: "1000px", backgroundColor: "#F6F6F6" }} />
      );
    }

    if (this.state.items) {
      return (
        <section
          className="clean-block about-us"
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <div className="container">
            <div className="block-heading" style={{ marginTop: "80px" }}>
              <h2 className="text-info">Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row justify-content-center">
              {this.state.items.map((item, index) => {
                return (
                  <ItemCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    desc={item.description}
                    image={item.image}
                  />
                );
              })}
            </div>
          </div>
        </section>
      );
    }
  }
}

export default ItemsPage;
