import React, { Component } from "react";
import axios from "axios";
import { Table, Container } from "reactstrap";

class Users extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:5000/transactions")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let Body = null;
    let listLength = null;

    if (this.state.users) {
      listLength = (
        <div>
          <div>
            <h2 className="text-center">Users</h2>
          </div>
          <p>Number of users: {this.state.users.length}</p>
        </div>
      );
      Body = (
        <tbody>
          {this.state.users.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{(index += 1)}</th>
                <th>{item._id}</th>
                <th>{item.local.email}</th>
              </tr>
            );
          })}
        </tbody>
      );
    }
    return (
      <Container>
        {listLength}
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>
          {Body}
        </Table>
      </Container>
    );
  }
}

export default Users;
