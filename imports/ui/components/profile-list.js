 import React from 'react';
 import{
   Row,
   Col,
   Grid,
   ListGroup,
   Alert
 } from 'react-bootstrap';
 import { Profile } from './profile.js';


export const ProfilesList = ({ profiles }) => (
  profiles.length > 0 ? <ListGroup className="profiles-list">
  {profiles.map((prof) =>(
    <Profile key={ prof._id } profile={ prof } />
  ))}
  </ListGroup> :
  <Alert bsStyle="warning">No profiles yet.</Alert>
);

ProfilesList.propTypes = {
  profiles: React.PropTypes.array,
};
