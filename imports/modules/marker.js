import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

let component;

const login = () => {
  const name = getInputValue(component.refs.name);
  const lat = getInputValue(component.refs.lat);
  const lng = getInputValue(component.refs.lat);

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
  // $(component.refs.login).validate({
  //   rules: {
  //     emailAddress: {
  //       required: true,
  //       email: true,
  //     },
  //     password: {
  //       required: true,
  //     },
  //   },
  //   messages: {
  //     emailAddress: {
  //       required: 'Need an email address here.',
  //       email: 'Is this email address legit?',
  //     },
  //     password: {
  //       required: 'Need a password here.',
  //     },
  //   },
  //   submitHandler() { login(); },
  // });
};

export const handleMarkers = (options) => {
  component = options.component;
  // validate();
};
