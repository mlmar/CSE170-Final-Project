$(document).ready(function() {
  $("#edit-btn").click(handleEdit);
  $("#save-btn").click(handleSave);
});

function handleEdit() {
  $(this).addClass("hidden");
  $(".year-label").text("Graduating Year");
  $(".major-label").text("Major");
  $(".edit-year").removeClass("hidden");
  $(".edit-major").removeClass("hidden");
  $("#save-btn").removeClass("hidden");
  $("#sign-btn").addClass("hidden");
}

function handleSave() {
  var year = $(".edit-year").val();
  var major = $(".edit-major").val();
  
  $.post("/updateUser", {year, major}, function() {
    $("#edit-btn").removeClass("hidden");
    $(".year-label").text(`Graduatng Year: ${year}`);
    $(".major-label").text(major);
    $(".edit-year").addClass("hidden");
    $(".edit-major").addClass("hidden");
    $(".edit-year").val(year);
    $(".edit-major").val(major);
    $("#save-btn").addClass("hidden");
    $("#sign-btn").removeClass("hidden");
  })
}