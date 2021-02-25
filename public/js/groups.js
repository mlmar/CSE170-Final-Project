$(document).ready(function() {
  $(".add-btn").click(handleClick);
})

function handleClick(e) {
  e.stopImmediatePropagation();
  $(this).toggleClass("rotate");
  $(".menu").toggleClass("visible");
}