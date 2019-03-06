import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLaptops } from '../../actions/laptopActions';
import Container from 'react-bootstrap/Container';
import { Col, Row, Button } from 'react-bootstrap';

import LaptopItem from './laptopItem';
import LaptopsForm from './laptopsForm';
import Cart from './cart';

class LaptopList extends Component {
  componentDidMount() {
    this.props.getLaptops();
  }
  render() {
    const laptopList = this.props.laptops.map(laptop => (
      <Col key={laptop.id} xs={12} sm={6} md={4} className="">
        <LaptopItem
          id={laptop.id}
          title={laptop.title}
          description={laptop.description}
          price={laptop.price}
        />
      </Col>
    ));
    return (
      <Container>
        <Row>
          <Cart />
        </Row>
        <Row className="mt-5">
          <Col xs={12} sm={6} md={4}>
            <LaptopsForm />
          </Col>
          {laptopList}
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    laptops: state.laptops.laptops
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLaptops }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaptopList);
