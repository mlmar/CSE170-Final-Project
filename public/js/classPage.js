$(document).ready(function() {
  $(".join-btn").click(handleJoinPopup);
  $(".popup.join .no").click(handleJoinPopup);
  $(".popup.join .yes").click(handleJoinYes);

  $(".leave-btn").click(handleLeavePopup);
  $(".popup.leave .no").click(handleLeavePopup);
  $(".popup.leave .yes").click(handleLeaveYes);


  $(".post-btn").click(togglePost)
  $(".post-form .cancel").click(togglePost);
  $(".post-form .confirm").click(handleConfirmPost);
  
  $(".comment-span").click(toggleComment);
  $(".comment-form .cancel").click(toggleComment);
  $(".comment-form .confirm").click(handleComment);

  $(".up-btn").click(toggleLike);
})


// shows up when we press join class
function handleJoinPopup() {
  $(".popup.join").toggleClass("visible");
}

function handleJoinYes() {
  var id = $(this).attr("id");
  $.post("/joinClass", { id });
  $(".join-btn").replaceWith(`<span class="leave-btn"> Leave </span>`);
  $(".leave-btn").click(handleLeavePopup);

  handleJoinPopup();
}

// shows up when we press leave class
function handleLeavePopup() {
  $(".popup.leave").toggleClass("visible");
}

function handleLeaveYes() {
  var id = $(this).attr("id");
  $.post("/leaveClass", { id });
  $(".leave-btn").replaceWith(`<span class="join-btn"> Join </span>`);
  $(".join-btn").click(handleJoinPopup);

  handleLeavePopup();
}

// handle pressing "post"
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

  $(".posts-list").prepend(newPost); // most recent posts appear first
  //$(".posts-list").append(newPost) // most recent posts appear last

  $.post('/sendPost', { id, userPost});
  togglePost();
}

// toggle comment view
function toggleComment() {
  $(".comment-form").toggleClass("visible");
}

// handle commenting function TODO
function handleComment() {
  alert("Comment function not implemented yet.");
  toggleComment();
}

// like a comment
function toggleLike() {
  $(this).toggleClass("highlight");
}