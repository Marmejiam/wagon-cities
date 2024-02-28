import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {


  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <div>
        <h3 onClick={this.handleClick}>{this.props.city.name}</h3>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    setActiveCity: setActiveCity
  },
    dispatch
  );
}


export default connect(null, mapDispatchToProps)(City);
