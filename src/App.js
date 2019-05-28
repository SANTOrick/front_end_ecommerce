import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import API from "./Api";

import AdminPage from "./components/Admin/AdminPage.js";
import AdminLogInForm from "./components/Admin/AdminLogInForm.js";
import NavBar from "./components/Partials/NavBar.js";
import HomePage from "./components/HomePage/HomePage.js";
import AdminPersonalizedView from "./components/Admin/AdminPersonalizedView.js";
import CartViewer from "./components/userComponents/CartViewer";

class App extends React.Component {
  state = {
    userToken: null,
    admin: false,
    basket: null,
    userToken: null,
    admin: false,
    cart: [
      {
        name: "Peete",
        seller: "Keller",
        bio: "Peter likes in the but",
        price: "2.300.00",
        image:
          "https://i.dailymail.co.uk/i/pix/2015/08/09/16/2B377C4E00000578-0-image-a-113_1439132603411.jpg"
      }
    ]
  };

  state = {
    email: ""
  };

  signin = (email, token) => {
    localStorage.setItem("token", token);
    this.setState({ email }, () => {
      this.props.history.push("/admin");
    });
  };

  signout = () => {
    this.setState({ email: "" });
    localStorage.removeItem("token");
    this.props.history.push("/signin");
  };

  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        this.props.history.push("/signin");
      } else {
        this.signin(data.email, localStorage.getItem("token"));
      }
    });
  }

  _removeFromCart = selectedItem => {
    let cart = this.state.cart;
    let item = cart.find(itemInCart => itemInCart === selectedItem);
    cart.pop(item);

    this.setState({ cart });
  };

  render() {
    const { signin, signout } = this;
    const { email } = this.state;
    return (
      <div>
        <NavBar signout={signout} />
        <Switch>
          <Route exact path="/admin" component={HomePage} />
          <Route
            path="/"
            component={props => <AdminLogInForm {...props} signin={signin} />}
          />
          <Route
            path="/cart"
            compoennt={props => (
              <CartViewer
                {...props}
                cart={this.state.cart}
                removeFromCart={this._removeFromCart}
              />
            )}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
