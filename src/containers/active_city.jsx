import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';


class ActiveCity extends Component {

  render() {
    return (
      <div className="active-city img-container">
        <h1>{this.props.activeCity.name}</h1>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt="" />
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

function mapReduxStateTopProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapReduxStateTopProps, mapDispatchToProps)(ActiveCity);
