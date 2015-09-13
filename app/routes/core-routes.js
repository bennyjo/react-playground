var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactBootstrap'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
		
		// Output html rendered by react
	    res.render('index.ejs', {reactOutput: reactHtml});
	});

};