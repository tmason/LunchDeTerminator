var createServer = require('./server');
var config = require('./config.js');

require('babel-core/register');

createServer(config, function () {
  console.log('Lunch DeTerminator started');
});
