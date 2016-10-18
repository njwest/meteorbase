import { Meteor } from 'meteor/meteor';
import { Documents } from '../documents';
import { Markers } from '../../markers/markers';

Meteor.publish('documents', () => Documents.find());
Meteor.publish('markers', () => Markers.find());
