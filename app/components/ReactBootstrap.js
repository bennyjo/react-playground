var React = require('react');
var rbs = require('react-bootstrap');

var Navbar = rbs.Navbar;
var Nav = rbs.Nav;
var NavDropdown = rbs.NavDropdown;
var MenuItem = rbs.MenuItem;

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
          </div>
        )
    }
});

module.exports = ReactApp;