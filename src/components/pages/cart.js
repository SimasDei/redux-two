import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Button } from 'react-bootstrap';

export class Cart extends Component {
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else return this.renderEmpty();
  }
  renderEmpty() {
    return <div> </div>;
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(item => (
      <Card.Body>
        <Row>
          <Col xs={12} sm={4}>
            <Card.Title>{item.title}</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    ));
    return <Card header="Cart">{cartItemsList}</Card>;
  }
}

const mapStateToProps = state => ({ cart: state.cart.cart });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
