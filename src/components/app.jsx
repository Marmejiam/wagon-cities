import React, { Component } from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

class App extends Component {

  render() {
  const cities = [
    { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
    { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
    { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
  ];

    return (
      <div className="app container">
        <CityList cities={cities} />
        <div className="active-city">
          <ActiveCity />
        </div>
      </div>
    );
  }
}

export default App;
