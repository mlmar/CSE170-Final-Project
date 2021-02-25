$(document).ready(function() {
  $(".join-btn").click(handleClick)
})

function handleClick(e) {
  $.post('/requestToJoinGroup', { id : $(".name").attr('id')});
  $(this).text("Joined!");
}