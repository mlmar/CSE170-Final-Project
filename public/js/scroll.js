var height = 0;

$(document).ready(function() {
  setTimeout(adjust, 120);
  $("main").on("scroll", handleScroll);
})

function adjust() {
  height = $(".header").outerHeight(true);
  $("main").css("padding-top", `${height}px`);
  $("main").css("padding-bottom", `${height}px`);
  console.log(height);
}

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition > height / 3) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}