import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from '../containers/city';


class CityList extends Component {
  componentDidMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities list-group-item">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    setCities: setCities
  },
    dispatch
  );
}

function mapReduxStateTopProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateTopProps, mapDispatchToProps)(CityList);
