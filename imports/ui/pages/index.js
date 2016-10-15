import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Climb On </h2>
    <p>A better way to climb.</p>
    <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
    {/* <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.7.0</p> */}
  </Jumbotron>
);
