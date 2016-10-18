import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';


export const Marker = ({ Marker }) => (
    <ListGroupItem key={ Marker._id }>
        <Row>
              <Col xs={ 8 } sm={ 10 }>
                    <FormControl
                      type="text"
                      defaultValue={ Marker.name }
                    />
              </Col>

        </Row>
    </ListGroupItem>
);
