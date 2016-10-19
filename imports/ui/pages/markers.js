import React from 'react';
import {
    Row,
    Col
 } from 'react-bootstrap';
import { AddMarkers } from '../components/add-markers.js';
import { Grid } from 'react-bootstrap';
import { handleMarkers } from '../../modules/marker';
import { getCurrentPosition } from '../../modules/get-current-position';
import {Link} from 'react-router';


export class Markers extends React.Component {
    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(function(position) {
        //   this.setState = {
        //     userPosition: {
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude
        //     }
        //   }
        // });
        getCurrentPosition(this)
        handleMarkers({ component: this });
    }
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            userPosition: {
                lat: 40.7128, lng: -74.0059
            },

            // zoom: 12,
            //
            // subscription: {
            //     markers: Meteor.subscribe('allMarkers')
            // },
            // markers: Markers.find().fetch(),
        }
    }
    //
    // componentDidMount() {
    //
    // }
    render(){
        console.log(this.state)
        return(
            <Grid>
                <Row>
                    <Col md={ 6 } mdPush={3} id="white-background">
                        <h4 className="page-header">Add a Climb</h4>
                        <AddMarkers userPosition={this.state.userPosition} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
