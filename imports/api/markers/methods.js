import { Markers } from './markers';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertMarker = new ValidatedMethod({
  name: 'marker.insert',
  validate: new SimpleSchema({
    name: {
      type: String,
    },
    lat:{
        type: String,
    },
    lng:{
        type: String,
    },
    rating:{
        type: String,
    },
    difficulty:{
        type: String,
    },
    comments:{
        type: String,
    }
  }).validator(),
  run(marker) {
    Markers.insert(marker);
  },
});

// Meteor.methods({
//   'Markers.insert': function(name, lat, lng) {
//     console.log('inserting now!')
//     return Markers.insert({
//         //basically means 'name: name'
//         name,
//         lat,
//         lng,
//         // ownerId: this.userId
//     });
//     },
//   // 'Markers.remove': function(marker) {
//   //   return Markers.remove(marker);
//   // },
//   'Markers.find': function(){
//       return Markers.find()
//   },
//   'allMarkers': function(){
//       return Markers.find()
//   }
//   // 'Markers.update': function(marker, content) {
//   //   return marker.update(bin._id, { $set: { content } });
//   // }
// })


export const updateMarker = new ValidatedMethod({
  name: 'markers.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Markers.update(_id, { $set: update });
  },
});

export const removeMarker = new ValidatedMethod({
  name: 'markers.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Markers.remove(_id);
  },
});

rateLimit({
  methods: [
    insertMarker,
    updateMarker,
    removeMarker,
  ],
  limit: 5,
  timeRange: 1000,
});
