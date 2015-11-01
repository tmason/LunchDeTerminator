'use strict';

var React = require('react');
var Button = require('react-bootstrap/lib/Button');

var SourceView = React.createClass({

  render: function () {
    var sourceCode = this.props.sourceCode.split(/\n/);
    var codeList = sourceCode.map(function (line) {
      return <p> { line } </p>;
    });

    return (
      <div className='source'>
        <Button className='btn-home'
        href='/'
        bsSize='large'>
          {'Back To Home'}
        </Button>

        <div className='code'>
          { codeList }
        </div>
      </div>
    );
  }

});

module.exports = SourceView;