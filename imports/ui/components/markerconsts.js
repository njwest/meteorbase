import React from 'react';
import { ListGroup, Alert, Col, ListGroupItem, FormControl, Button, Row } from 'react-bootstrap';
// import { Marker } from './marker.js';

const Marker = ({ marker }) => (
    <ListGroupItem key={ marker._id }>
        <Row>
              <Col xs={ 8 } sm={ 10 }>
                    <Button bsStyle="link" href={"https://maps.google.com/maps?&z=10&q="+marker.lat+'+'+marker.lng+'&ll='+marker.lat+marker.lng}>{marker.name}</Button>
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
  <Alert bsStyle="warning">No Markers yet.</Alert>
);

MarkerConsts.propTypes = {
  markers: React.PropTypes.array,
};
