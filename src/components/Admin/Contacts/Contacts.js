import React, { Component } from "react";
import axios from "axios";
import { Table, Button, Container } from "reactstrap";
import moment from "moment";

class Contact extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/contacts")
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let TableBody = null;
    let listLength = null;
    if (this.state.contacts) {
      listLength = (
        <div>
          <div>
            <h2 className="text-center">Contacts</h2>
          </div>
          <p>Number of contacts: {this.state.contacts.length}</p>
        </div>
      );

      TableBody = (
        <tbody>
          {this.state.contacts.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{(index += 1)}</th>
                <th>{item.name}</th>
                <th>{item.subject}</th>
                <th>{item.email}</th>
                <th>{moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}</th>
                <th>{item.message}</th>
                <th>
                  <Button
                    color="danger"
                    value={item._id}
                    name={index}
                    //onClick={this.deleteArtist}
                  >
                    Delete
                  </Button>
                </th>
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
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          {TableBody}
        </Table>
      </Container>
    );
  }
}

export default Contact;
