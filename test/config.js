/*global describe,it */
var assert = require('chai').assert;
var config = require('../config.js');

describe('config.js', function () {
  it('configures the service name', function () {
    assert.equal(config.name, 'deTerminator');
  });
});
