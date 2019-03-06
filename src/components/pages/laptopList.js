import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLaptops } from '../../actions/laptopActions';

class LaptopList extends Component {
  componentDidMount() {
    this.props.getLaptops();
  }
  render() {
    const laptopList = this.props.laptops.map(laptop => (
      <div key={laptop.id}>
        <h2>{laptop.title}</h2>
        <h2>{laptop.description}</h2>
        <h2>{laptop.price}</h2>
      </div>
    ));
    return (
      <div>
        <h1>React Component</h1>
        {laptopList}
      </div>
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
