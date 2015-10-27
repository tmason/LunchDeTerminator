/*global describe,it,beforeEach,afterEach */
var assert = require('chai').assert;
var config = require('../config.js');
var createServer = require('../server.js');
var supertest = require('supertest');

describe('API', function () {
  var server;

  beforeEach(function (done) {
    server = createServer(config);
    done();
  });

  afterEach(function (done) {
    server.close();
    done();
  });

  it('is up', function (done) {
    supertest(server)
      .get('/')
      .expect(200)
      .end(done);
  });
});
