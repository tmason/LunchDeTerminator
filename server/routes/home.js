'use strict';

var React = require('react');

var HomeView = React.createFactory(require('../../web/views/home.jsx'));

module.exports = function HomeRoute(req, res) {
  res.status(200).render('__layout', {
    outlet: React.renderToString(new HomeView())
  });
};