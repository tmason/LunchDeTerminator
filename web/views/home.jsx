'use strict';

var React = require('react');

var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');

var HomeView = React.createClass({

  componentDidMount: function () {
    //play sound
  },

  render: function () {
    return (
      <div className='home'>
        <h1 className='header'>
          {'The Lunch De-Terminator'}
        </h1>

        <div className="gif">
          <img src="http://i.giflike.com/lVSWMBm_sg.gif" />
        </div>

        <Grid>
          <Row>
            <Col sm={6} md={3} mdOffset={3}>
              <Button className='btn-eat'
              href='eat'
              bsSize='large'>
                {'Time to eat!'}
              </Button>
            </Col>
            <Col sm={6} md={3}>
              <Button className='btn-source'
              href='source'
              bsSize='large'>
                {'View source code'}
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

});

module.exports = HomeView;