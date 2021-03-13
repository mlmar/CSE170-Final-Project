var height = 0;

$(document).ready(function() {
  setTimeout(adjust, 140);
  $("main").on("scroll", handleScroll);
})

function adjust() {
  height = $(".header").outerHeight(true) + 16;
  $("main").css("padding-top", `${height}px`);
  console.log(height);
}

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition > height / 6) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}