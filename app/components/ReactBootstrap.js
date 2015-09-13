var React = require('react');
var rbs = require('react-bootstrap');

var Button = rbs.Button;

var ReactApp = React.createClass({
    
    componentDidMount: function() {
      console.log('componentDidMount');
    },

    render: function() {
        return (
          <div>
            <Button bsStyle="primary" bsSize="large">:D</Button>
          </div>
        )
    }
});

module.exports = ReactApp;