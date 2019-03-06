import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';

import { postLaptop } from '../../actions/laptopActions';

export class laptopsForm extends Component {
  handleSubmit = () => {
    const laptop = [
      {
        title: findDOMNode(this.refs.title).value,
        description: findDOMNode(this.refs.description).value,
        price: findDOMNode(this.refs.price).value
      }
    ];
    this.props.postLaptop(laptop);
  };

  render() {
    return (
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" ref="title" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                ref="description"
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                ref="price"
              />
            </Form.Group>
            <Button onClick={this.handleSubmit}>Add Product</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postLaptop }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(laptopsForm);
