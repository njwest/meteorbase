import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

let component;

const addMarker = () => {
    console.log('Add marker fired')
  const name = getInputValue(component.refs.name);
  // const lat = getInputValue(component.refs.lat);
  // const lng = getInputValue(component.refs.lat);
  console.log(name);

  // Meteor.loginWithPassword(email, password, (error) => {
  //   if (error) {
  //     Bert.alert(error.reason, 'warning');
  //   } else {
  //     Bert.alert('Logged in!', 'success');
  //
  //     const { location } = component.props;
  //     if (location.state && location.state.nextPathname) {
  //       browserHistory.push(location.state.nextPathname);
  //     } else {
  //       browserHistory.push('/');
  //     }
  //   }
  // });
};

const validate = () => {

    addMarker();
  // $(component.refs).validate({
  //   // rules: {
  //   //   name: {
  //   //     required: true,
  //   //   },
  //   //   lat: {
  //   //     required: true,
  //   //   },
  //   //   lng: {
  //   //     required: true,
  //   //   },
  //   // },
  //   // messages: {
  //   //   name: {
  //   //     required: 'Need an name address here.',
  //   //   },
  //   //   lat: {
  //   //     required: 'Need a lat here.',
  //   //   },
  //   //   lng: {
  //   //     required: 'Need a lng here.',
  //   //   },
  //   // },
  //   submitHandler() { addMarker(); },
  // });

};

export const handleMarkers = (options) => {
  component = options.component;
  console.log(component)
  validate();
};
