var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);
var router = express.Router();
var io = require('socket.io')(server);

var getFood = require('../lib/get-food.js');

var HomeRoute = require('./routes/home');

module.exports = function createServer(config, cb) {
  app.use(express.static('web'));
  app.use(express.static('styles'));
  app.use(express.static('assets'));
  app.use(express.static('lib'));

  io.on('connection', function (socket) {
    socket.on('getFood', function () {
      var result = getFood();

      socket.emit('returnFood',  { data: result });
    });
  });

  app.get('/', HomeRoute);

  server.listen(config.port, cb.bind(null, app.get('env'), app.get('host'), config.port));
};