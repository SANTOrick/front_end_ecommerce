import React, { Component } from "react";
import axios from "axios";
import { Table, Container } from "reactstrap";
import Contact from "./Contact";

class Contacts extends Component {
  state = {};

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    axios
      .get("http://localhost:3000/contacts")
      .then(response => {
        this.setState({ contacts: response.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteContact = id => {
    axios
      .delete(`http://localhost:3000/contacts/${id}`)
      .then(response => {
        this.fetchContacts();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container style={{ marginTop: "80px" }}>
        {this.state.contacts && (
          <div>
            <div>
              <h2 className="text-center">Contacts</h2>
            </div>
            <p>Number of contacts: {this.state.contacts.length}</p>
          </div>
        )}
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
          {this.state.contacts && (
            <tbody>
              {this.state.contacts &&
                this.state.contacts.map((item, index) => {
                  return (
                    <Contact
                      index={index}
                      key={item.id}
                      contact={item}
                      deleteContact={this.deleteContact}
                    />
                  );
                })}
            </tbody>
          )}
        </Table>
      </Container>
    );
  }
}

export default Contacts;
