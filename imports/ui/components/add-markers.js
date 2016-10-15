import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertMarker } from '../../api/markers/methods.js';

const handleInsertMarkers = (event) => {
  const target = event.target;
  const title = target.value.trim();
console.log(event)
  // if (title !== '' && event.keyCode === 13) {
  //   insertMarker.call({
  //     title,
  //   }, (error) => {
  //     if (error) {
  //       Bert.alert(error.reason, 'danger');
  //     } else {
  //       target.value = '';
  //       Bert.alert('Marker added!', 'success');
  //     }
  //   });
  // }
};

const log = (event) => {
console.log('log')
  // if (title !== '' && event.keyCode === 13) {
  //   insertMarker.call({
  //     title,
  //   }, (error) => {
  //     if (error) {
  //       Bert.alert(error.reason, 'danger');
  //     } else {
  //       target.value = '';
  //       Bert.alert('Marker added!', 'success');
  //     }
  //   });
  // }
};




export const AddMarkers = () => (
  <FormGroup onSubmit={ handleInsertMarkers }>
    <FormControl
      type="text"
      ref="title"
      placeholder="Name the route"
    />
    <FormControl
      type="text"
      ref="lat"
      placeholder="Lat"
    />
    <FormControl
      type="text"
      ref="lng"
      placeholder="Lng."
    />
    <button onKeyUp={ log() }>Submit</button>
  </FormGroup>
);
