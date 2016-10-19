import React from 'react';
import { ListGroup, Alert, Col, ListGroupItem, FormControl, Button, Row } from 'react-bootstrap';
// import { Marker } from './marker.js';

const Marker = ({ marker }) => (
    <ListGroupItem key={ marker._id }>
        <Row>
              <Col xs={ 8 } sm={ 10 }>
              <h3>{marker.name}</h3>
                  <a href={"https://www.google.com/maps/dir/Current+Location/"+marker.lat+'+'+marker.lng} target="_blank">Click Here for Directions</a>
              </Col>

        </Row>
    </ListGroupItem>
);

export const MarkerConsts = ({ markers }) => (
  markers.length > 0 ? <ListGroup className="Markers-list">
    {markers.map((mark) => (
      <Marker key={ mark._id } marker={ mark } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No climbs yet.</Alert>
);

MarkerConsts.propTypes = {
  markers: React.PropTypes.array,
};
