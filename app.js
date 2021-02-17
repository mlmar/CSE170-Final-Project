// modules
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index.js');
var classPage = require('./routes/classPage.js')

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
app.get('/', index.view);
app.get('/class/:id/', classPage.view)
app.get('/class/:id/:page', classPage.view)


// server start
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
