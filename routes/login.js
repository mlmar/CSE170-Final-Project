var users = require("../data/users.json");

/*
  Receives username and password from login page

    {req} : contains username and password query
    {res} : sends back homepage
*/
exports.login = function(req, res) {
  if(users[req.body.username]?.password == req.body.password) {
    var user = users[req.body.username];
    req.session.name = user.name;
    req.session.username = user.username;
    req.session.year = user.year;
    req.session.major = user.major;
    res.redirect('/home');
  } else {
    res.redirect('/')
  }
}