import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../actions/cartActions';

export class laptopItem extends Component {
  handleCart = () => {
    const laptop = [
      ...this.props.cart,
      {
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        price: this.props.price
      }
    ];
    this.props.addToCart(laptop);
  };
  render() {
    return (
      <Card>
        <Row>
          <Col xs={12}>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <h6 className="text-muted">${this.props.price}</h6>
              <Button onClick={this.handleCart} variant="primary">
                Add to Cart
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(laptopItem);
