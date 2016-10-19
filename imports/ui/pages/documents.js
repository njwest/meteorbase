import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddDocument } from '../components/add-document.js';
import { Grid } from 'react-bootstrap';

export const Documents = () => (
<Grid>
  <Row>
    <Col md={ 6 } mdPush={3}>
      <h4 className="page-header">Documents</h4>
      <AddDocument />
      <DocumentsList />
    </Col>
  </Row>
</Grid>
);
