$(document).ready(function() {
  $(".item").click(handleItemClick);
  console.log(localStorage.getItem("test"));
});

function handleItemClick() {
  alert("Feature not fully implemented yet but class has been added to the home screen.");
  var id = $(this).attr("id");
  $.post("/joinClass", { id });
}