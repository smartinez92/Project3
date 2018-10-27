var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
  
)

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3030;
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});