import { Meteor } from 'meteor/meteor';
import { Markers } from '../markers';

Meteor.publish('markers', () => Markers.find());
