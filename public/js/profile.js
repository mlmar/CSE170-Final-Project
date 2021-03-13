$(document).ready(function() {
  $("#edit-btn").click(handleEdit);
  $("#save-btn").click(handleSave);
});

function handleEdit() {
  $(this).addClass("hidden");
  $(".year-label").text("Graduating Year");
  $(".major-label").text("Major");
  $(".phone-label").text("Phone Number");
  $(".edit-year").removeClass("hidden");
  $(".edit-major").removeClass("hidden");
  $(".edit-phone").removeClass("hidden");
  $("#save-btn").removeClass("hidden");
  $("#sign-btn").addClass("hidden");
}

function handleSave() {
  var year = $(".edit-year").val();
  var major = $(".edit-major").val();
  var phone = $(".edit-phone").val();
  
  $.post("/updateUser", {year, major, phone}, function() {
    $("#edit-btn").removeClass("hidden");
    $(".year-label").text(`Graduatng Year: ${year}`);
    $(".major-label").text(major);
    $(".phone-label").text(phone);
    $(".edit-year").addClass("hidden");
    $(".edit-major").addClass("hidden");
    $(".edit-phone").addClass("hidden");
    $(".edit-year").val(year);
    $(".edit-major").val(major);
    $(".edit-phone").val(phone);
    $("#save-btn").addClass("hidden");
    $("#sign-btn").removeClass("hidden");
  })
}