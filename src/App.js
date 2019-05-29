import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import API from "./Api";

import AdminLogInForm from "./components/Admin/AdminLogInForm.js";
import Navigation from "./components/Admin/Navigation/Navigation.js";
import HomePage from "./components/HomePage/HomePage.js";
import CartViewer from "./components/userComponents/CartViewer";

import Transactions from "./components/Admin/Transactions/Transactions";
import Contacts from "./components/Admin/Contacts/Contacts";
import ProductForm from "./components/Admin/Product/ProductForm";

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
    this.props.history.push("/admin/login");
  };

  componentDidMount() {
    // API.validate().then(data => {
    //   if (data.error) {
    //     console.log(data);
    //     this.props.history.push("/admin/login");
    //   } else {
    //     this.signin(data.email, localStorage.getItem("token"));
    //   }
    // });
  }

  removeFromCart = selectedItem => {
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
        {<Navigation signout={signout} />}
        <Switch>
          <Route
            path="/cart"
            // component={props => (
            //   <CartViewer
            //     {...props}
            //     cart={this.state.cart}
            //     removeFromCart={this.removeFromCart}
            //   />
            // )}
          />
          <Route exact path="/admin" component={HomePage} />
          <Route
            path="/admin/login"
            exact
            component={props => <AdminLogInForm {...props} signin={signin} />}
          />
          <Route path="/admin/contacts" component={Contacts} />
          <Route path="/admin/transactions" component={Transactions} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
