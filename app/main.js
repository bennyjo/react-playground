var React = require('react');
var ReactApp = require('./components/ReactAppMaterialUi');

var mountNode = document.getElementById("react-main-mount");

React.render(React.createElement(ReactApp), mountNode);