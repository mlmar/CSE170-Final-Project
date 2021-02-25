exports.view = function(req, res) {
  var groupID = req.params.group;
  res.render('group')
}