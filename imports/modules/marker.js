import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';
import { insertMarker } from '../api/markers/methods.js';
import { Markers } from '../api/markers/markers.js';
let component;

const addMarker = () => {
  console.log(component.refs.addMarker);
    const name      = getInputValue(component.refs.name);
    const userLat   = getInputValue(component.refs.lat);
    const userLng   = getInputValue(component.refs.lng);
    // const lat = ;
    // const lng = Number(lng_str);
    console.log(name);
    console.log(typeof userLat);
    console.log(typeof userLng);

    insertMarker.call({
        name,
        lat: userLat,
        lng: userLng
    }, (error) => {
        if (error) {
          Bert.alert(error.reason, 'warning',);
        } else {
          Bert.alert('Inserted', 'success');

            const { location } = component.props;
                if (location.state && location.state.nextPathname) {
            browserHistory.push(location.state.nextPathname);
                } else {
            browserHistory.push('/');
            }
        }
    });
};

const validate = () => {
  $(component.refs.addMarker).validate({
    rules: {
      name: {
        required: true,
      },
      lat: {
        required: true,
      //   number: true,
      },
      lng: {
        required: true,
      //   number: true,
      },
    },
    messages: {
      name: {
        required: 'A name is required',
      },
      lat: {
        required: 'Please insert a latitude',
      },
      lng: {
        required: 'Please insert a Lotitude',
      },
    },
    submitHandler() { addMarker(lat, lng); },
  });

};

export const handleMarkers = (options) => {
  component = options.component;
  lat       = options.lat;
  lng       = options.lng;

  validate(lat, lng);
};
