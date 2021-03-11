var height = 0;

$(document).ready(function() {
  setTimeout(adjust, 10);
  $("main").on("scroll", handleScroll);
})

function adjust() {
  height = $(".header").outerHeight(true);
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