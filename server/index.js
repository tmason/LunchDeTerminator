var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);
var router = express.Router();
var hbs = require('hbs');

module.exports = function createServer(config, cb) {
  app.use(express.static('public'));
  app.engine('hbs', hbs.__express);
  hbs.registerPartials('server/templates/partials');
  app.set('view engine', 'hbs');
  app.set('views', 'server/templates');

  app.get('/', require('./routes/home'));
  app.get('/eat', require('./routes/eat'));
  app.get('/source', require('./routes/source'));

  server.listen(config.port, cb.bind(null, app.get('env'), app.get('host'), config.port));
};