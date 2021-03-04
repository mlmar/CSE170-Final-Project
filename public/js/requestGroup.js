$(document).ready(function() {
  $(".join-btn").click(handleClick)
})

function handleClick(e) {
  e.preventDefault();
  $.post('/requestToJoinGroup', { id : $(".name").attr('id')});
  $(this).text("Joined!");
}