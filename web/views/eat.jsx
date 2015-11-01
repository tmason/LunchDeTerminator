'use strict';

var React = require('react');
var Button = require('react-bootstrap/lib/Button');

var determinator = require('../../lib/get-food');

var EatView = React.createClass({

  getInitialState: function () {
    return {
      choice: ''
    };
  },

  determinate: function () {
    var choice = determinator();
    this.setState({
      choice: choice
    });
  },

  render: function () {
    return (
      <div className='eat'>
        <h1>{'Choose what to exclude'}</h1>

        <div className='options'>
          <input type="checkbox" name="pizza"/>
          <span>{'Pizza'}</span>
          <br />
          <input type="checkbox" name="burgers"/>
          <span>{'Burgers'}</span>
          <br />
          <input type="checkbox" name="fancy"/>
          <span>{'Fancy Restaurants'}</span>
          <br />
          <input type="checkbox" name="asian"/>
          <span>{'Asian'}</span>
          <br />
          <input type="checkbox" name="sandwiches"/>
          <span>{'Sandwiches'}</span>
          <br />
          <input type="checkbox" name="shawarma"/>
          <span>{'Shawarma'}</span>
          <br />
          <input type="checkbox" name="desk"/>
          <span>{'Eat At Your Desk'}</span>
          <br />
        </div>

        <Button className='btn-eat'
        bsSize='large'
        onClick={this.determinate}>
          {'Time to eat!'}
        </Button>
      </div>
    );
  }

});

module.exports = EatView;