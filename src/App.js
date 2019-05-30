import React from "react";

import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import API from "./Api";
import "./Assets/bootstrap/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Admin/Navigation/Navigation.js";

import Transactions from "./components/Admin/Transactions/Transactions";
import Contacts from "./components/Admin/Contacts/Contacts";
import Products from "./components/Admin/Product/Products";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import ItemsPage from "./components/Items/ItemsPage.js";
import Footer from "./components/Footer/Footer.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Privacy from "./components/Privacy/Privacy";
import AdminLogInForm from "./components/Admin/AdminLogInForm.js";
import NavBar from "./components/Partials/NavBar";
import CartViewer from "./components/userComponents/CartViewer";

class App extends React.Component {
  state = {
    userToken: null,
    admin: false,
    basket: null,
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

  signin = (email, token) => {
    localStorage.setItem("token", token);
    this.setState({ email }, () => {});
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

  _addNewItem = newItem => {
    fetch(API + "/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  render() {
    const { signin, signout } = this;
    // const { email } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          {this.props.location.pathname.includes("admin") ? (
            <Navigation />
          ) : (
            <NavBar />
          )}
          <Switch>
            <Route path="/" component={LandingPage} exact />

            <Route
              path="/cart"
              component={props => (
                <CartViewer
                  {...props}
                  cart={this.state.cart}
                  removeFromCart={this._removeFromCart}
                />
              )}
            />
            <Route path="/privacy" component={Privacy} exact />
            <Route path="/items" component={ItemsPage} exact />
            <Route path="/contacts" component={ContactUs} exact />
            <Route exact path="/admin" component={Products} />
            <Route
              path="/admin/login"
              exact
              component={props => <AdminLogInForm {...props} signin={signin} />}
            />
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/contacts" component={Contacts} />
            <Route path="/admin/transactions" component={Transactions} />
            <Route path="*" component={ErrorPage} />
          </Switch>
          {this.props.location.pathname.includes("admin") ? null : <Footer />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
