import React from "react";
import { Button } from "reactstrap";
import moment from "moment";

const Contact = props => {
  return (
    <tr key={props.index}>
      <th scope="row">{props.index + 1}</th>
      <th>{props.contact.name}</th>
      <th>{props.contact.subject}</th>
      <th>{props.contact.email}</th>
      <th>
        {moment(props.contact.created_at).format("MMMM Do YYYY, h:mm:ss a")}
      </th>
      <th>{props.contact.message}</th>
      <th>
        <Button
          color="danger"
          value={props.contact.id}
          onClick={() => props.deleteContact(props.contact.id)}
        >
          Delete
        </Button>
      </th>
    </tr>
  );
};

export default Contact;
