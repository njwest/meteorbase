import React from 'react';
import {Link} from 'react-router';
import {
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    Grid
} from 'react-bootstrap';

export class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            // zoom: 12,
            //
            // subscription: {
            //     markers: Meteor.subscribe('allMarkers')
            // },
            // markers: Markers.find().fetch(),

        }
    }

    componentDidMount() {
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">New York</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var ny = {lat: 40.7128, lng: -74.0059};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: 40.7128,
                lng: -74.0059
            }
        });
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        var marker = new google.maps.Marker({
          position: ny,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
    getCurrentPosition(){
        navigator.geolocation.watchPosition( (position) => {
            let userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
            this.setState({
                userPosition,
            });
        },
        (error) => {
            alert(error.message);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 10}
        );
    }
    render(){
        // console.log(google);
        return (
            <div>
                <div id="map" className="map-container"></div>
            </div>
        );
    }
}
