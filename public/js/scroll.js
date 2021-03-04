$(document).ready(function() {
  $("main").on("scroll", handleScroll);
})

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition > 80) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}