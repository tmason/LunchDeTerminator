'use strict';

var React = require('react');

var SourceView = React.createFactory(require('../../web/views/source.jsx'));

module.exports = function SourceRoute(req, res) {
  res.status(200).render('__layout', {
    outlet: React.renderToString(new SourceView(req.reactProps))
  });
};