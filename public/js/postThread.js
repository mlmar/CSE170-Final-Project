$(document).ready(function() {
  $(".comment-form").submit(handleSubmit);
});

function handleSubmit(e) {
  e.preventDefault();
  var id = url;
  var postID = $(".comment-form").attr("id");
  var val = $(".comment-input").val();
  
  $.post("/sendComment", {
    id : id,
    postID : postID,
    text: val
  }, function() {
    $(".comment-list").append(`
      <div class="panel flex-col">
        <span class="name">
        <span class="picture"></span>
          <label> ${displayName} </label>
        </span>
        <p class="text"> ${val} </p>
      </div>
    `)
    $(".comment-input").val("");
  })
}