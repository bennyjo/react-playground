var React = require('react');
var rbs = require('react-bootstrap');

var TopNavigation = require('./TopNavigation');
var LeftNavigation = require('./LeftNavigation');

var ReactApp = React.createClass({

    componentDidMount: function() {
      console.log('componentDidMount');
    },  

    render: function() {
        return (
          <div className='buzzbattery'>
            <TopNavigation />

            <LeftNavigation />
          </div>
        )
    }
});

module.exports = ReactApp;