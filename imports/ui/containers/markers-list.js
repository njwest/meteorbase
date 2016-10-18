import { composeWithTracker } from 'react-komposer';
import { Markers } from '../../api/markers/markers.js';
import { MarkersList } from '../components/markers-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('markers');
  if (subscription.ready()) {
    const markers = Markers.find().fetch();
    onData(null, { markers });
  }
};

export default composeWithTracker(composer, Loading)(MarkersList);
