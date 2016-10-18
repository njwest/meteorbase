import { composeWithTracker } from 'react-komposer';
// import { Profile } from '../../api/users/profile.js';
import { ProfilesList } from '../components/documents-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('userData');
  if (subscription.ready()) {
    const profiles = Profiles.find().fetch();
    onData(null, { profiles });
  }
};

export default composeWithTracker(composer, Loading)(ProfilesList);
