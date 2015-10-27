var beatrix = require('beatrix');
var Exec = require('child_process').exec;

module.exports = function createServer(config) {
  var app = beatrix.bootstrapService(config.name, config.port, config);
  app.server.get('/', function (req, res, next) {
    res.send(200, 'Hello World! ' + req.headers['user-agent']);
    next();
  });

    var child = Exec('java determinator', function(err, output) {
        console.log(output);
    });
    console.log(child);
  return app.server;
};