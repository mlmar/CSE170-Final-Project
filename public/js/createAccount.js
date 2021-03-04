$(document).ready(function() {
  $("#username").on("input", handleCheck);
})

function handleCheck(e) {
  var val = $(this).val();
  if(val.length) {
    $.post('/checkUser', { username: val }, function(res) {
      if(res.taken) {
        $(".taken").removeClass("hidden");
        $("#submit").addClass("hidden");
      } else {
        $(".taken").addClass("hidden");
        $("#submit").removeClass("hidden");
      }
    });
  } else {
    $(".taken").addClass("hidden");
  }
    
}