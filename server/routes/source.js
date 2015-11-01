'use strict';

var fs = require('fs');
var React = require('react');

var SourceView = React.createFactory(require('../../web/views/source.jsx'));

module.exports = function SourceRoute(req, res) {
  var reactProps, sourceCode;

  sourceCode = fs.readFileSync('lib/determinator.arnoldc', 'utf-8');
  reactProps = {
    sourceCode: sourceCode
  };

  res.status(200).render('__layout', {
    outlet: React.renderToString(new SourceView(reactProps)),
    props: JSON.stringify(reactProps)
  });
};