var height = 0;

$(document).ready(function() {
  adjust();
  $("main").on("scroll", handleScroll);
})

function adjust() {
  height = $(".header").outerHeight();
  $("main").css("padding-top", `${height}px`);
  console.log(height);
}

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition > height / 2) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}