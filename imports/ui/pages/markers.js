import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddMarkers } from '../components/add-markers.js';
import { Grid } from 'react-bootstrap';

export const Markers = () => (
  <Grid>
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Markers</h4>
      <AddMarkers />
      <DocumentsList />
    </Col>
  </Row>
  </Grid>
);
