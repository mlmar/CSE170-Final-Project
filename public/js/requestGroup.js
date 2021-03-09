$(document).ready(function() {
  $(".join-btn").click(handleClick)
})

function handleClick(e) {
  e.preventDefault();
  $.post('/requestToJoinGroup', { id : $(".name").attr('id')}, function() {
    $(".popup").toggleClass("visible");
    $(".prompt").text("Successfully joined " + $(".name").text());
  });
  $(this).text("Joined!");
}