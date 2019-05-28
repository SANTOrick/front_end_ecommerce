import React from "react";
import AdminPage from "./components/Admin/AdminPage.js";
import AdminLogInForm from "./components/Admin/AdminLogInForm.js";
import NavBar from "./components/Partials/NavBar.js";
import HomePage from "./components/HomePage/HomePage.js";
import AdminPersonalizedView from "./components/Admin/AdminPersonalizedView.js";

export default class App extends React.Component {
  state = {
    userToken: null,
    admin: false,
    basket: null
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <AdminLogInForm />
        <NavBar />
        <AdminPersonalizedView />
        <HomePage />
      </div>
    );
  }
}
