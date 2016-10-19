import React from 'react';
import { ListGroup, Alert, Col, ListGroupItem, FormControl, Button, Row } from 'react-bootstrap';
// import { Marker } from './marker.js';

const Marker = ({ marker }) => (
    <ListGroupItem key={ marker._id }>
        <Row>
              <Col xs={ 12 } sm={ 12 }>
              <img src="/rock.png"/>
              <h3>{marker.name}</h3>
              <h4>Difficulty: v{marker.difficulty}</h4>
              <h4>Rating: {marker.rating}</h4>
              <h4>Comments: {marker.comments}</h4>
                  <h4><a href={"https://www.google.com/maps/dir/Current+Location/"+marker.lat+'+'+marker.lng} target="_blank" id="links">Directions</a></h4>
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
