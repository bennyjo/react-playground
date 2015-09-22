var React = require('react');
var rbs = require('react-bootstrap');

var Tabs = rbs.Tabs;
var Tab = rbs.Tab;

var FilterInput = require('./FilterInput');

var LeftNavigation = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      batteries: [
        { id: 1, name: "Winter 2015" },
        { id: 2, name: "Winter 2016" },
        { id: 3, name: "Summer 2015" },
        { id: 4, name: "Summer 2016" },
        { id: 5, name: "Autumn 2015" },
        { id: 6, name: "Autumn 2016" },
        { id: 7, name: "Spring 2015" },
        { id: 8, name: "Sprint 2016" },
        { id: 9, name: "Red" },
        { id: 10, name: "Blue" },
        { id: 11, name: "Black" },
        { id: 12, name: "Green" },
        { id: 13, name: "Pink" },
        { id: 14, name: "Kids" },
        { id: 15, name: "Men" },
        { id: 16, name: "Women" }
      ]
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },

  render: function() {
    var SearchTab = <Tab eventKey={0} title={<FilterInput filterText={this.state.filterText} onUserInput={this.handleUserInput} />}/>;

    var BatteryTabs = this.state.batteries.map(function(battery, index) {
      if (this.state.filterText === "" || battery.name.indexOf(this.state.filterText) !== -1) {
        return <Tab eventKey={index+1} key={index+1} title={battery.name}>Tab {index+1} content</Tab>
      }
    }.bind(this));

    return (
      <Tabs 
        className="container"
        defaultActiveKey={1}
        position="left"
        standalone={false}
        animation={false}
        tabWidth={3}
      >
        {SearchTab}
        {BatteryTabs}
      </Tabs>
    )
  }
});

module.exports = LeftNavigation;