var React = require('react');
var rbs = require('react-bootstrap');

var Navbar = rbs.Navbar;
var Nav = rbs.Nav;
var NavDropdown = rbs.NavDropdown;
var MenuItem = rbs.MenuItem;

var Tabs = rbs.Tabs;
var Tab = rbs.Tab;

var ReactApp = React.createClass({

    componentDidMount: function() {
      console.log('componentDidMount');
    },  

    render: function() {
        return (
          <div className='buzzbattery'>
            <Navbar brand={<span><img src='/images/buzzbattery-logo-small.png' title='buzzbattery' />buzzbattery</span>} >
              <Nav right eventKey={0}>
                <NavDropdown eventKey={1} title="[avatar] username" id="collapsible-navbar-dropdown">
                  <MenuItem eventKey="1">Profile</MenuItem>
                  <MenuItem eventKey="2">Billing</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3">Logout</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>

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