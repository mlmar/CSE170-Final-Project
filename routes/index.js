/* 
  index html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  res.render('index');
}