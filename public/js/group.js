$(document).ready(function() {
  $(".leave-btn").click(handleLeavePopup);
  $(".popup.leave .no").click(handleLeavePopup);
  $(".popup.leave .yes").click(handleLeaveYes);
})

function handleLeavePopup() {
  $(".popup.leave").toggleClass("visible");
}

function handleLeaveYes() {
  var id = $(this).attr("id");
  $.post("/leaveGroup", { id }, function() {
    $(".popup.okay").addClass("visible");
  });
}