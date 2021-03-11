// modules
var express = require('express');
var session = require('express-session');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index.js');
var login = require('./routes/login.js');
var createAccount = require('./routes/createAccount.js');
var profile = require('./routes/profile.js')
var home = require('./routes/home.js');
var joinClass = require('./routes/joinClass.js');
var classPage = require('./routes/classPage.js');
var createGroup = require('./routes/createGroup.js');
var joinGroup = require('./routes/joinGroup.js');
var group = require('./routes/group.js');

app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: "arbitrary",
  resave: true,
  saveUninitialized: true
}))


// routes
app.get('/', index.view); // login form page
app.get('/incorrect', index.viewIncorrect); // login form page
app.post('/login', login.login); // send login info here
app.get('/createAccount', createAccount.view); // send login info here
app.post('/checkUser', createAccount.checkUsername) // check if username taken
app.post('/signup', createAccount.signup); // send login info here
app.get('/profile', profile.view); // send login info here
app.post('/updateUser', profile.update); // update user info

app.get('/home', home.view); // redirected here after logging in
app.get('/join/class', joinClass.view) // shows when user presses join
app.post('/joinClass/', joinClass.join) // join a user class
app.post('/leaveClass', joinClass.leave) // leave a user class
app.get('/search', joinClass.search) // search route with query

app.get('/class/:id', classPage.view) // feed page
app.post('/sendPost', classPage.post) // post to a class
app.post('/sendComment', classPage.comment) // post to a class
app.get('/class/:id/posts/:postID', classPage.viewPost) // view post information

app.get('/class/:id/group/:group', group.view); // view a specific group
app.post('/leaveGroup', group.leaveGroup); // leave specific group
app.get('/class/:id/groups', classPage.viewGroups) // groups page
app.get('/class/:id/groups/create', createGroup.view); // create a group page
app.post('/createGroup', createGroup.create); // create a group
app.get('/class/:id/groups/join', joinGroup.view); // list of gorups to join
app.get('/class/:id/members', classPage.members);
app.get('/class/:id/member/:member', classPage.viewMember);
app.post('/class/:id/filterMembers', classPage.filterMembers);
app.post('/updateMembers', group.updateMembers);

app.get('/class/:id/list', classPage.viewList) // feed page

app.get('/class/:id/groups/:group', joinGroup.viewGroup); // view a group to join
app.post('/requestToJoinGroup', joinGroup.join); // join the group




// server start
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});