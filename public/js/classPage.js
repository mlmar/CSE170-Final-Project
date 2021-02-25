$(document).ready(function() {
  $(".post-btn").click(togglePost)
  $(".post-form .cancel").click(togglePost);
  $(".post-form .confirm").click(handleConfirmPost);
  
  $(".comment-span").click(toggleComment);
  $(".comment-form .cancel").click(toggleComment);
  $(".comment-form .confirm").click(handleComment);

  $(".up-btn").click(toggleLike);
})

function togglePost() {
  $(".post-form").toggleClass("visible");
}

function handleConfirmPost() {
  var userPost = {
    name: $(".confirm").attr("id"),
    text: $(".post-form textarea").val()
  }

  var newPost = `
    <a class="item"> 
      <span class="name">
        <span class="picture"></span>
        <label> ${userPost.name} </label>
      </span>
      <p class="text"> ${userPost.text} </p>
      <br/>
      <span class="button-panel">
        <span class="up-btn icon"> </span>
        <span class="flex"> 
          <span class="comment-btn icon"> </span>  
          <label> Comment </label> 
        </span>
      </span>
    </a>
  `

  $(".posts-list").prepend(newPost);

  $.post('/sendPost', userPost);
  togglePost();
}

function toggleComment() {
  $(".comment-form").toggleClass("visible");
}

function handleComment() {
  alert("//todo post request");
  toggleComment();
}

function toggleLike() {
  $(this).toggleClass("highlight");
}