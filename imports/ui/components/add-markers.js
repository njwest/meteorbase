import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertMarker } from '../../api/markers/methods.js';

const handleInsertMarkers = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    insertMarker.call({
      title,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Marker added!', 'success');
      }
    });
  }
};

export const AddMarkers = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertMarkers }
      placeholder="Name the route"
    />
    <FormControl
      type="text"
      onKeyUp={ handleInsertMarkers }
      placeholder="Lat"
    />
    <FormControl
      type="text"
      onKeyUp={ handleInsertMarkers }
      placeholder="Lng."
    />
  </FormGroup>
);
