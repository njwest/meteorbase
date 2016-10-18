/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Markers } from './markers.js';

describe('Marker collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Markers, 'object');
  });
});
