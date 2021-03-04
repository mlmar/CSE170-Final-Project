$(document).ready(function() {
  $(".group-form").submit(handleSubmit);
})

function handleSubmit(e) {
  e.preventDefault();
  $.post('/createGroup', { 
    url : $(".header").attr('id'),
    name : $("#name").val(),
    description : $("#description").val(),
    contact : $("#contact").val()
  }, function() {
    $(".popup").toggleClass("visible");
  });
}