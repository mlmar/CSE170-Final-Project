var url = null;

$(document).ready(function() {
  $(".group-form").submit(handleSubmit);
  $(".members-btn").click(openMembers);
  $(".members-form").submit(handleAddMembers);
  $(".cancel").click(closeMembers);
  $("#search").on('input', handleSearch);
  
  url = $(".header").attr("id");


  $.get(`/class/${url}/members`, (res) => { 
    all = res.members
    filtered = all;
    updateList(all)
  });

})

var all;
var filtered;
var addedMembers = [];
var addedMemberNames = [];


function handleSubmit(e) {
  e.preventDefault();
  $.post('/createGroup', { 
    url : url,
    name : $("#name").val(),
    description : $("#description").val(),
    contact : $("#contact").val(),
    members : addedMembers
  }, function() {
    $(".popup").toggleClass("visible");
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

      $(".current-members-list").append(`
        <span class="flex item">
          <div class="item">
            <span class="picture"></span>
            <label class="name"> ${name} </label>
          </div>
        </span>
      `)
  })

  console.log(addedMembers);


  
  closeMembers();
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