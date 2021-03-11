$(document).ready(function() {
  $("#search").on("input", handleSearch);
});

function handleSearch() {
  var val = $(this).val();

  if(val.length) {
    $.each($(".item"), function() {
      if($(this).text().toLowerCase().includes(val.toLowerCase())) {
        $(this).removeClass("hidden")
      } else {
        $(this).addClass("hidden");
      }
    });
  } else {
    $(".item").removeClass("hidden");
  }
}