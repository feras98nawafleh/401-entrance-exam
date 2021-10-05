import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
class FavWatchModal extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={() => this.props.handleDisUpModal(this.props.selectedWatches)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Fruits</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.props.handleUpModal}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  defaultValue={this.props.selectedWatches.title}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  name="Description"
                  defaultValue={this.props.selectedWatches.description}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price in US Dollar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="toUSD"
                  name="toUSD"
                  defaultValue={this.props.selectedWatches.toUSD}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image URL"
                  name="image"
                  defaultValue={this.props.selectedWatches.image}
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default FavWatchModal;
