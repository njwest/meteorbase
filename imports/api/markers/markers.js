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
  title: {
    type: String,
    label: 'The name of the route',
  },
  lat:{
      type: Number,
      label: "latitude",
  },
  lng:{
      type: Number,
      label: "longitude",
  },
  rating:{
      type: Number,
      label: "User Rating",
  },
  difficulty:{
      type: Number,
      label: "Route difficulty",
  },
});

Markers.attachSchema(Markers.schema);

Factory.define('marker', Markers, {
  title: () => faker.hacker.phrase(),
});
