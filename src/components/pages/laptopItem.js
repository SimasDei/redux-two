import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';

export class laptopItem extends Component {
  render() {
    return (
      <Card>
        <Row>
          <Col xs={12}>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <h6 className="text-muted">${this.props.price}</h6>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default laptopItem;
