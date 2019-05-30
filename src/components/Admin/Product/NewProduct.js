import React, { Component } from "react";
import ProductForm from "./ProductForm";
import "../Navigation/Navigation.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class NewProduct extends Component {
  state = {
    modal: false,
    nestedModal: false,
    closeAll: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  };

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  };

  handler = e => {
    this.setState({
      uploaded: !this.state.uploaded
    });
  };

  render() {
    return (
      <div>
        <Button className="ButtonLink" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <ProductForm />

            {/*
              <Button color="success" onClick={this.toggleNested}>
              Show Nested Modal
            </Button>*/}
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>
                  Done
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleAll}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewProduct;
