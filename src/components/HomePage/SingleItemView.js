import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./SingleItemView.css";

export default class SingleItemView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            className="detailedImage"
            src={this.props.selectedItem.image}
            alt={this.props.selectedItem.name}
          />
          <CardBody>
            <CardTitle>{this.props.selectedItem.name}</CardTitle>
            <CardSubtitle>{this.props.selectedItem.bio}</CardSubtitle>
            <CardText>{this.props.selectedItem.name}</CardText>
            <Button
              onClick={() => this.props.addToMyCart(this.props.selectedItem)}
            >
              Add to my cart
            </Button>
            <Button onClick={() => this.props.goBack()}>Go Back</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
