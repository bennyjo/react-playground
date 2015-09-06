var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),

    AppBar = mui.AppBar,
    FlatButton = mui.FlatButton,

    List = mui.List,
    ListItem = mui.ListItem;

var listStyle = { width: '230px' };

var ReactApp = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    componentDidMount: function() {
        console.log('componentDidMount');
    },
    render: function() {
        return (
          <div>
            <AppBar 
              title="buzzbattery"
              iconElementRight={<FlatButton label="Log out" />} />

            <div style={listStyle}>
              <List subheader="Batteries">
                <ListItem primaryText="Battery 1" />
                <ListItem primaryText="Battery 2" />
                <ListItem primaryText="Battery 3" />
                <ListItem primaryText="Battery 4" />
                <ListItem primaryText="Battery 5" />
              </List>
            </div>
          </div>
        )
    }
});

module.exports = ReactApp;