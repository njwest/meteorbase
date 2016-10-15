import React, { Component } from 'react';

class Maps extends Component {

  componentDidMount() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: -34.397, lng: 150.644}
    });
  }

  render() {
    return (
      <div id="map" className="map-container"></div>
    );
  }
};

export default Maps;
