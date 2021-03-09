var classes = require("../data/classes.json");

/* 
  joinpage html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  var user = req.session.username;
  var userClassIds = classes.joined[user];
  var userClasses = classes.classes.filter(c =>  {
    return userClassIds.indexOf(c.url) === -1;
  });

  res.render('joinClass', { classes : userClasses });
}

exports.search = function(req, res) {
  var term = req.query.term
  var searchedClasses = classes.classes.filter(c => (c.title.toLowerCase().includes(term.toLowerCase())));
  res.render('joinClass', { classes: searchedClasses })
}

exports.join = function(req, res) {
  var id = req.body.id;
  var user = req.session.username;
  classes.joined[user].push(classes.classes[id].url);
  classes.classes[id].members.push(user);
  console.log(classes.joined[user]);
}

exports.leave = function(req, res) {
  var id = req.body.id;
  var user = req.session.username;
  classes.joined[user] = classes.joined[user].filter(c => c !== classes.classes[id].url);
  classes.classes[id].members = classes.classes[id].members.filter(u => u !== user); 
  console.log(classes.joined[user]);
}