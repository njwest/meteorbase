import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import {Bert} from 'meteor/themeteorchef:bert';
import {insertMarker} from '../../api/markers/methods.js';

const handleInsertMarkers = (event) => {
    const target = event.target;
    const title = target.value.trim();
    console.log('is this shit working?');
    console.log(target);
    console.log(title);
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

export const AddMarkers = () => (
    <FormGroup onSubmit={this.handleInsertMarkers}>
        <FormControl type="text" name="name" placeholder="Name the route"/>
        <FormControl type="text" name="name" placeholder="Lat"/>
        <FormControl type="text"  name="name" placeholder="Lng."/>
        <input type="submit" value="Submit" />
    </FormGroup>
);
