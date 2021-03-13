var height = 0;

$(window).on("load", function() {
  setTimeout(adjust, 150);
  $("main").on("scroll", handleScroll);
})

function adjust() {
  height = $(".header").outerHeight(true);
  $("main").css("padding-top", `${height}px`);
  console.log(height);
}

function handleScroll() {
  var scrollPosition = $(this).scrollTop();
  if(scrollPosition > height / 4) {
    $(".header").addClass("shrink");
  } else {
    $(".header").removeClass("shrink");
  }
}