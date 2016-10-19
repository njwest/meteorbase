import React from 'react';
import { ListGroup, Alert, Col, ListGroupItem, FormControl, Button, Row } from 'react-bootstrap';
// import { Marker } from './marker.js';

const Marker = ({ marker }) => (
    <ListGroupItem key={ marker._id }>
        <Row>
              <Col xs={ 8 } sm={ 10 }>
                    <FormControl
                      type="number"
                      defaultValue={ marker.lat }
                    />
                    <FormControl type="number" defaultValue={ marker.lng } />
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
