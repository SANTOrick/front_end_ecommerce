import React from 'react';
import { Table, Button } from 'reactstrap';
import "./CartViewer.css";
const imgStyle = {
  maxHeight: 300,
  maxWidth: 300
};

export default class CartViewer extends React.Component {

  render(){
    return (
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Seller</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(item => <tr>
              <th scope="row">
              <div className="cart-image" style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover'}} />
              </th>
              <td>{item.name}</td>
              <td>{item.seller}</td>
              <td>{item.price}</td>
              <td>
                <Button color="primary">Buy</Button>{' '}
              </td>
              <td>
                <Button color="danger" onClick={()=>this.props.removeFromCart(item)}>Remove</Button>{' '}
              </td>
            </tr>
            )
          }
        </tbody>
      </Table>
    );
  }
}
