// modules
var express = require('express');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index.js');
var login = require('./routes/login.js');
var home = require('./routes/home.js');
var joinClass = require('./routes/joinClass.js');
var classPage = require('./routes/classPage.js')
var joinGroup = require('./routes/joinGroup.js')
var group = require('./routes/group.js')

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

app.get('/home', home.view); // redirected here after logging in
app.get('/join/class', joinClass.view) // shows when user presses join

app.get('/class/:id', classPage.view) // feed page
app.get('/class/:id/:page', classPage.view) // groups page

app.get('/class/:id/join', joinGroup.view); // join a group page
app.get('/group/:group', group.view); // join a :group


// server start
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});