import React from "react";
import { Container, Media, Row, Col } from "reactstrap";
import "./HomePage.css";
const imgStyle = {
  maxHeight: 300,
  maxWidth: 300
};

export default class AdminPersonalizeView extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          {this.props.images.map(url => (
            <Col sm="3">
              <div
                className="yomama"
                style={{
                  backgroundImage: `url(${url.url})`,
                  backgroundSize: "cover"
                }}
              >
                {console.log(url.url)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
