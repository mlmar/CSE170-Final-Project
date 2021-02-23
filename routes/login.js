var classes = require("../data/classes.json")

/*
  Receives username and password from login page
  TODO: validation for wizard of oz login
  Then redirects user to their home page

    {req} : contains username and password query
    {res} : sends back homepage
*/
exports.login = function(req, res) {
  var user = {
		name: req.query.username,
		password: req.query.password,
	}
  res.redirect(`/${user.name}/home`)
}