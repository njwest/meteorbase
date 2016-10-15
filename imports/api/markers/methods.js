import { Markers } from './markers';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertMarker = new ValidatedMethod({
  name: 'marker.insert',
  validate: new SimpleSchema({
    title: {
      type: String,
    },
    lat:{
        type: Number,
    },
    lng:{
        type: Number,
    },
    rating:{
        type: Number,
    },
    difficulty:{
        type: Number,
    },
  }).validator(),
  run(marker) {
    Markers.insert(marker);
  },
});

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
