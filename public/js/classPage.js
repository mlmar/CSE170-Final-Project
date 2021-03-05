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

  $(".up-btn").click(toggleLike);
})


// shows up when we press join class
function handleJoinPopup() {
  $(".popup.join").toggleClass("visible");
}

function handleJoinYes() {
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
    name: $(this).attr('id'),
    text: $(".post-form textarea").val()
  }

  $.post('/sendPost', { id, userPost}, function(res) {
    var newPost = `
      <span class="item"> 
        <span class="name">
          <span class="picture"></span>
          <label> ${userPost.name} </label>
        </span>
        <p class="text"> ${userPost.text} </p>
        <br/>
        <span class="button-panel">
          <span></span>
          <a class="flex comment-span" href="/class/${id}/posts/${res.postID}"> 
            <span class="comment-btn icon"> </span>
            <span> Comment </span> 
          </a>
        </span>
      </span>
    `

    // $(".posts-list").prepend(newPost); // most recent posts appear first
    $(".posts-list").append(newPost) // most recent posts appear last
    $(".post-form textarea").val("");
  });
  togglePost();
}

// like a comment
function toggleLike() {
  $(this).toggleClass("highlight");
}