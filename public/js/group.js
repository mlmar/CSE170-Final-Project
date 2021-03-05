$(document).ready(function() {
  $(".leave-btn").click(handleLeavePopup);
  $(".popup.leave .no").click(handleLeavePopup);
  $(".popup.leave .yes").click(handleLeaveYes);

  $("#members-btn").click(openMembers);
  $(".members-form").submit(handleAddMembers);
  $(".cancel").click(closeMembers);
  $("#search").on('input', handleSearch);

  $.post(`/class/${url}/filterMembers`, { groupID : groupID }, (res) => { 
    all = res.members;
    filtered = all;
    updateList(all)
  });
})

function handleLeavePopup() {
  $(".popup.leave").toggleClass("visible");
}

function handleLeaveYes() {
  var id = $(this).attr("id");
  $.post("/leaveGroup", { id }, function() {
    $(".popup.okay").addClass("visible");
  });
}



function openMembers() {
  $(".members-select").addClass("visible");
}

function updateList(members) {
  $(".members-list").html("");
  members.forEach(function(member) {
    var element = `
      <span class="flex item">
        <span class="picture">
        </span>
        <label class="name flex fill" for="${member.username}" id="${member.username}-label"> ${member.name} </label>
        <input type="checkbox" name="username" value="${member.username}" id="${member.username}"/>
      </span>
    `
    $(".members-list").append(element);
  })
}

function closeMembers() {
  $(".members-select").removeClass("visible");
}

function handleAddMembers(e) {
  addedMembers = [];
  $("#added-members").html("");

  e.preventDefault();
  $.each($("input[name='username']:checked"), function() {
    var val = $(this).val();
    addedMembers.push(val);
    var name = $(`#${val}-label`).text();

      $("#added-members").append(`
        <span class="flex item">
          <span class="picture">
          </span>
          <label class="name flex fill" "> ${name} </label>
        </span>
      `)
  })

  closeMembers();
  update();
}

function update() {
  $.post('/updateMembers', { groupID : groupID, addedMembers }, function(res) {
    var updatedMembers = res.members;
    console.log(updatedMembers);
    $(".current-members-list").html("");

    updatedMembers.forEach(function(m) {
      $(".current-members-list").append(`
        <div class="item">
          <span class="picture"></span>
          <label class="name"> ${m.name} </label>
          <label> ${m.phone} </label>
        </div>
      `)

      $.post(`/class/${url}/filterMembers`, { groupID : groupID }, (res) => { 
        all = res.members;
        filtered = all;
        updateList(all)
      });
    })
  })
}

function handleSearch() {
  all.forEach(function(member) {
    $(`#${member.username}`).parent().removeClass("hidden");
  })

  var val = $(this).val();
  filtered = all.filter(member => !member.name.toLowerCase().includes(val.toLowerCase()));
  filtered.forEach(function(member) {
    $(`#${member.username}`).parent().addClass("hidden");
  })
}