import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';
import { withGoogleMap } from "react-google-maps";
export class Maps extends React.Component {
    // componentDidMount() {
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 8,
    //     center: {lat: -34.397, lng: 150.644}
    //   });
    // }

    render() {
        // console.log(google);
      return (
        <div id="map" className="map-container">
            <h1>Map</h1>
        </div>
      );
    }
}
