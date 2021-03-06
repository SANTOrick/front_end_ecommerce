import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class NewAddedItems extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.images.map((item, index) => (
            <Col sm="3" key={index}>
              <div
                key={item.id}
                className="yomama"
                onClick={() => this.props.handleClick(item)}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover"
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
