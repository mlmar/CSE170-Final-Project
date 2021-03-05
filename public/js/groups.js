$(document).ready(function() {
  $(".add-btn").click(handleClick);
})

function handleClick(e) {
  e.stopImmediatePropagation();
  $(this).toggleClass("rotate").toggleClass("light");
  $(".menu").toggleClass("visible");
}