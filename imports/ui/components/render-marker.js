import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router';
import {PublicNavigation} from './public-navigation';
import {AuthenticatedNavigation} from './authenticated-navigation';

export class renderMarker extends React.Component {
  constructor(props) {
    super(props)
  }
  initMarker() {
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {
        lat: 40.7128,
        lng: -74.0059
      }
    });
    marker.addListener('click', toggleBounce);
  }

  render() {
    return ()
  }
}
