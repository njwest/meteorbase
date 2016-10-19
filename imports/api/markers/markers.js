import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Markers = new Mongo.Collection('Markers');

Markers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Markers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Markers.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the route',
  },
  lat:{
      type: String,
      decimal: true,
      label: "latitude",

  },
  lng:{
      type: String,
      decimal: true,
      label: "longitude",

  },
  rating: {
    type: String,
  //   number: true,
  },
  difficulty: {
    type: String,
  //   number: true,
  },
  difficulty: {
    type: String,
  //   number: true,
  },
  comments: {
      type: String,
  }
  // rating:{
  //     type: Number,
  //     label: "User Rating",
  // },
  // difficulty:{
  //     type: Number,
  //     label: "Route difficulty",
  // },
});

Markers.attachSchema(Markers.schema);

Factory.define('marker', Markers, {
  title: () => faker.hacker.phrase(),
});
