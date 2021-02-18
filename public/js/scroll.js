$(document).ready(function() {
	initializePage();
})

function initializePage() {
}

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}