var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);
var router = express.Router();

var HomeRoute = require('./routes/home');

module.exports = function createServer(config, cb) {
  app.use(express.static('web'));
  app.use(express.static('styles'));
  app.use(express.static('assets'));
  app.use(express.static('lib'));

  app.get('/', HomeRoute);

  server.listen(config.port, cb.bind(null, app.get('env'), app.get('host'), config.port));
};