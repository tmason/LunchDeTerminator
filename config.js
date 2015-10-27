var name = require('./package.json').name;

module.exports = require('rc')(name, {
  name: name,
  dataDir: 'data',
  log: {
    level: 'info'
  },
  stats: {
    disable: true
  },
  port: 8080
});
