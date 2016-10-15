import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddMarkers } from '../components/add-markers.js';

export const Markers = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Markers</h4>
      <AddMarkers />
      <DocumentsList />
    </Col>
  </Row>
);
