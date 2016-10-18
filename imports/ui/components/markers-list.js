import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Marker } from './marker.js';

export const MarkersList = ({ markers }) => (
  markers.length > 0 ? <ListGroup className="Markers-list">
    {markers.map((mark) => (
      <Marker key={ mark._id } marker={ mark } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Markers yet.</Alert>
);

MarkersList.propTypes = {
  markers: React.PropTypes.array,
};
