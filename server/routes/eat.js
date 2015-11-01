'use strict';

var React = require('react');

var EatView = React.createFactory(require('../../web/views/eat.jsx'));

module.exports = function EatRoute(req, res) {
  res.status(200).render('__layout', {
    outlet: React.renderToString(new EatView())
  });
};