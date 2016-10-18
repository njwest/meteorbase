import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Row, Col, Grid, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import MarkersList from '../containers/markers-list.js';


export const Profile = () => (
  <Grid>
    <Row>
      <Col xs={ 12 }>
        <MarkersList />
      </Col>
    </Row>
  </Grid>
);
