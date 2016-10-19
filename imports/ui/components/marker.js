import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';


export const Marker = ({ marker }) => (
    <ListGroupItem key={ marker._id }>
        <Row>
              <Col xs={ 8 } sm={ 10 }>
                    <FormControl
                      type="text"
                      defaultValue={ marker.name }
                    />
              </Col>

        </Row>
    </ListGroupItem>
);
