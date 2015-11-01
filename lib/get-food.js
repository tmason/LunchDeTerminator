var Exec = require('child_process').exec;

module.exports = function () {
  var result;
  Exec('java determinator', function(err, output) {
    result = output;
  });

  return result;
};