$(document).ready(function() {
  $(".item").click(handleItemClick);
  console.log(localStorage.getItem("test"));
});

function handleItemClick() {
  alert("Feature not fully implemented yet but class has been added to the home screen. You may have to refresh the home screen if you're on Heroku.");
  var id = $(this).attr("id");
  $.post("/joinClass", { id });
}