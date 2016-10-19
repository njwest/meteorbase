// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';
// import { Markers } from '../../api/markers/markers.js';
// import { renderMaps } from '../components/map.js';
//
// // export default createContainer(({ params }) => {
// //   const subscription = Meteor.subscribe('documents');
// //   const loading = !subscription.ready();
// //   const markers = Markers.find().fetch();
// //
// //   return { loading, markers };
// // }, MarkerList);
//
//
// export default MarkerList = createContainer(() => {
//   const subscription = Meteor.subscribe('documents');
//
//   return {
//       currentUser: Meteor.user(),
//       listLoading: ! handle.ready(),
//       markers: Markers.find().fetch(),
//   };
// }, renderMaps);


import { composeWithTracker } from 'react-komposer';
import { Markers } from '../../api/markers/markers.js';
import { renderMaps } from '../components/map.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('markers');
  if (subscription.ready()) {
    const markers = Markers.find().fetch();
    onData(null, { markers });
  }
};

export default composeWithTracker(composer, Loading)(renderMaps);
