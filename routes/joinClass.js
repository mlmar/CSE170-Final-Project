var classes = require("../data/classes.json");

/* 
  joinpage html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  res.render('joinClass', classes);
}

exports.search = function(req, res) {
  var term = req.query.term
  var searchedClasses = classes.classes.filter(c => (c.title.toLowerCase().includes(term.toLowerCase())));
  res.render('joinClass', { classes: searchedClasses })
}