var createServer = require('./server');
var config = require('./config.js');

createServer(config, function () {
  console.log('Lunch DeTerminator started');
});
