import React from 'react';
import {
    Row,
    Col
 } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddMarkers } from '../components/add-markers.js';
import { Grid } from 'react-bootstrap';
import { handleMarkers } from '../../modules/marker';

import {Link} from 'react-router';


export class Markers extends React.Component {
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
    //
    // componentDidMount() {
    //
    // }
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={ 12 }>
                        <h4 className="page-header">Markers</h4>
                        <AddMarkers />
                        <DocumentsList />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
