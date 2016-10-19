import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

export const Index = () => (
<Grid>
  <Jumbotron className="text-center">
  <div>
  <h1>Image</h1>
  
</div>
    <p>A better way to climb.</p>
    <p><a className="btn btn-success" href="/map" role="button">To the map!</a></p>
  </Jumbotron>
</Grid>
);
  
