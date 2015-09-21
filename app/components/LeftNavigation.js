var React = require('react');
var rbs = require('react-bootstrap');

var Tabs = rbs.Tabs;
var Tab = rbs.Tab;

var LeftNavigation = React.createClass({
  getInitialState: function() {
    return {
      batteries: [
        { id: 1, name: "Battery 1" },
        { id: 2, name: "Battery 2" },
        { id: 3, name: "Battery 3" },
        { id: 4, name: "Battery 4" },
        { id: 5, name: "Battery 5" }
      ]
    };
  },

  render: function() {
    var BatteryTabs = this.state.batteries.map(function(battery, index) {
      return <Tab eventKey={index} title={battery.name}>Tab {index+1} content</Tab>;
    });

    return (
      <Tabs className="container" defaultActiveKey={1} position="left" standalone={false} animation={false} tabWidth={3}>
        {BatteryTabs}
      </Tabs>
    )
  }
});

module.exports = LeftNavigation;