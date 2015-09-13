var React = require('react');
var rbs = require('react-bootstrap');

var TopNavigation = require('./TopNavigation');

var Tabs = rbs.Tabs;
var Tab = rbs.Tab;

var ReactApp = React.createClass({

    componentDidMount: function() {
      console.log('componentDidMount');
    },  

    render: function() {
        return (
          <div className='buzzbattery'>
            <TopNavigation />

            <Tabs className="container" defaultActiveKey={2} position="left" standalone={false} animation={false} tabWidth={3}>
              <Tab eventKey={1} title="Battery 1">Tab 1 content</Tab>
              <Tab eventKey={2} title="Battery 2">Tab 2 content</Tab>
              <Tab eventKey={3} title="Battery 3">Tab 3 content</Tab>
            </Tabs>
          </div>
        )
    }
});

module.exports = ReactApp;