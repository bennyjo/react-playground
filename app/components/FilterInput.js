var React = require('react');
var rbs = require('react-bootstrap');

var Input = rbs.Input;

var FilterInput = React.createClass({
  handleChange: function() {
    this.setState({
      value: this.refs.filterInput.getValue()
    });
  },

  render: function() {
    return (
      <Input
        type="text"
        ref="filterInput"
        value={this.props.filterText}
        onChange={this.handleChange} />
    )
  }
});

module.exports = FilterInput;