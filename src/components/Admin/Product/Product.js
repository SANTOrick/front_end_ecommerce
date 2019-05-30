import React from "react";
import { Button } from "reactstrap";
import moment from "moment";

const Product = props => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <th>
        <img
          src={`data:image/png;base64,${props.product.image}`}
          alt={props.product.name}
          width="64px"
          height="64px"
        />
      </th>
      <th className="fontColor">{props.product.name}</th>
      <th>{props.product.description}</th>
      <th>{props.product.price}</th>
      <th>{props.product.stock}</th>
      <th>{props.product.times_purchased}</th>

      <th>
        {moment(props.product.created_at).format("MMMM Do YYYY, h:mm:ss a")}
      </th>
      <th>
        <Button
          style={{ marginLeft: "10px", marginBottom: "5px" }}
          color="danger"
          value={props.product.id}
          name={props.index}
          onClick={() => props.onDelete(props.product.id)}
        >
          Delete
        </Button>

        <Button
          style={{
            marginLeft: "10px",
            width: "70px",
            marginBottom: "5px"
          }}
          color="success"
          value={props.product.id}
          name={props.index}
        >
          Edit
        </Button>
      </th>
    </tr>
  );
};

export default Product;
