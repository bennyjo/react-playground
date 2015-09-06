var React = require('react/addons'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    RaisedButton = mui.RaisedButton;

var ReactApp = React.createClass({

      childContextTypes: {
        muiTheme: React.PropTypes.object
      },

      getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
      },

      componentDidMount: function () {
        console.log('componentDidMount');
      },

      render: function () {
        return (
          <div><RaisedButton label="takes a long time though" /></div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;