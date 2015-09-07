var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),

    AppBar = mui.AppBar,
    FlatButton = mui.FlatButton,

    List = mui.List,
    ListItem = mui.ListItem;

var listStyle = { 
  width: '230px',
  position: 'absolute',
  top: '64px',
  overflow: 'hidden'
};

var contentStyle = {
  minHeight: '1000px',
  borderLeft: '1px solid rgb(224, 224, 224)',
  marginLeft: '230px',
  padding: '24px'
};

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
    
    saySomething: function(pageNumber) {
      console.log('click: ', pageNumber);
    },

    render: function() {
        return (
          <div>
            <AppBar 
              title="buzzbattery"
              iconElementRight={<FlatButton label="Log out" />} />

            <div style={listStyle}>
              <List subheader="Your batteries">
                <ListItem primaryText="Battery 1" onClick={this.saySomething.bind(this, 1)} />
                <ListItem primaryText="Battery 2" onClick={this.saySomething.bind(this, 2)} />
                <ListItem primaryText="Battery 3" onClick={this.saySomething.bind(this, 3)} />
                <ListItem primaryText="Battery 4" onClick={this.saySomething.bind(this, 4)} />
                <ListItem primaryText="Battery 5" onClick={this.saySomething.bind(this, 5)} />
              </List>
            </div>

            <div style={contentStyle}>
              Content area
            </div>
          </div>
        )
    }
});

module.exports = ReactApp;