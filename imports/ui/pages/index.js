import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

export const Index = () => (
<Grid>
  <Jumbotron className="text-center">
    <h2>http://climbon.it/assets/img/climbonbadge.png</h2>
    <p>A better way to climb.</p>
    <p><a className="btn" href="/map" role="button">To the map!</a></p>
  </Jumbotron>
</Grid>
);
