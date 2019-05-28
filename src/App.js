import React from 'react';
import AdminPage from './components/Admin/AdminPage';
import AdminLogInForm from './components/Admin/AdminLogInForm';
import NavBar from './components/NavBar';
import CartViewer from './components/userComponents/CartViewer';
import HomePage from './components/HomePage/HomePage';
import AdminPersonalizedView from './components/Admin/AdminPersonalizedView';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      userToken: null,
      admin: false,
      cart: [{
        name: "Peete",
        seller:"Keller",
        bio:"Peter likes in the but",
        price: "2.300.00",
        image: "https://i.dailymail.co.uk/i/pix/2015/08/09/16/2B377C4E00000578-0-image-a-113_1439132603411.jpg",
      }]
    }
  }

  _removeFromCart= (selectedItem) => {
    let cart = this.state.cart
    let item = cart.find(itemInCart=> itemInCart === selectedItem)
    cart.pop(item)


    this.setState({ cart })
  }

  render(){
    return (
      <div className="App">
      <NavBar />
      <br/>
      <AdminLogInForm />
      <br/>
      <NavBar />
      <br/>
      <CartViewer cart={this.state.cart} removeFromCart={this._removeFromCart}/>
      <br/>
      <HomePage />
      </div>
    );
  }
}
