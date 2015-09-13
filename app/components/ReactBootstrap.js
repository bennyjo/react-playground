var React = require('react');
var rbs = require('react-bootstrap');

var bButton = rbs.Button;

var ReactApp = React.createClass({
    
    componentDidMount: function() {
      console.log('componentDidMount');
    },

    render: function() {
        return (
          <div><p>something!</p></div>
        )
    }
});

module.exports = ReactApp;