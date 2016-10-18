import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
// import methods here

export const Profile = ({ profile }) =>
<ListGroupItem key={ profile._id }>
    <Row>
          <Col xs={ 8 } sm={ 10 }>
                <FormControl
                  type="text"
                  defaultValue={ profile.title }
                />
          </Col>
          <Col xs={ 4 } sm={ 2 }>
                <Button
                  bsStyle="danger"
                  className="btn-block"
                  >
                  Remove
                </Button>
          </Col>
    </Row>
</ListGroupItem>
);

//                   onKeyUp={ handleUpdateDocument.bind(this, profile._id) }
// onClick={ handleRemoveDocument.bind(this, profile._id) }
