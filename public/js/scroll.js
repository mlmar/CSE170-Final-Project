$(document).ready(function() {
	initializePage();
})

function initializePage() {
  $("main").on("scroll", handleScroll);
}

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition > 100) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}