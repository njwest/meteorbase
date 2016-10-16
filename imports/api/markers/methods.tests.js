/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { Markers } from './markers.js';
import { insertMarker, updateMarker, removeMarker } from './methods.js';

describe('Markers methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a document into the Markers collection', function () {
    insertMarker.call({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    const getMarker = Markers.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getMarker.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a document in the Markers collection', function () {
    const { _id } = Factory.create('marker');

    updateMarker.call({
      _id,
      update: {
        title: 'You can\'t arrest me, I\'m the Cake Boss!',
      },
    });

    const getMarker = Markers.findOne(_id);
    assert.equal(getMarker.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a marker from the Markers collection', function () {
    const { _id } = Factory.create('marker');
    removeMarker.call({ _id });
    const getMarker = .findOne(_id);
    assert.equal(getMarker, undefined);
  });
});
