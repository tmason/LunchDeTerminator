var Exec = require('child_process').exec;

module.exports = function () {
  return Exec('java determinator', function(err, output) {
    return output;
  });
};