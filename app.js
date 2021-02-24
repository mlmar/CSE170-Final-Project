// modules
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index.js');
var login = require('./routes/login.js');
var homepage = require('./routes/homepage.js');
var joinpage = require('./routes/joinpage.js');
var classpage = require('./routes/classpage.js')

app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.get('/', index.view); // login form page
app.post('/login', login.login); // send login info here
app.get('/home', homepage.view); // redirected here after logging in

app.get('/join', joinpage.view) // shows when user presses join

app.get('/class/:id', classpage.view) // feed page
app.get('/class/:id/:page', classpage.view) // groups page


// server start
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});