var React = require('react');
var rbs = require('react-bootstrap');

var Input = rbs.Input;

var FilterInput = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },

  handleChange: function() {
    this.setState({
      value: this.refs.filterInput.getValue()
    });

    console.log(this.refs.filterInput.getValue());
  },

  render: function() {
    return (
      <Input
        type="text" 
        ref="filterInput"
        value={this.state.value}
        onChange={this.handleChange} />
    )
  }
});

module.exports = FilterInput;