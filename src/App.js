import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import API from "./Api";

import AdminPage from "./components/Admin/AdminPage.js";
import AdminLogInForm from "./components/Admin/AdminLogInForm.js";
import NavBar from "./components/Partials/NavBar.js";
import HomePage from "./components/HomePage/HomePage.js";
import AdminPersonalizedView from "./components/Admin/AdminPersonalizedView.js";

class App extends React.Component {
  state = {
    userToken: null,
    admin: false,
    basket: null
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
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
