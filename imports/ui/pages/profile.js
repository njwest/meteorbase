import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Row, Col, Grid, ListGroupItem, FormControl, Button } from 'react-bootstrap';

Meteor.subscribe("userData");

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const Profile = () => (
  <Grid>
    <Row>
      <Col xs={ 12 }>
        <h4>{ this.userName() } hello</h4>
      </Col>
    </Row>
  </Grid>
);
