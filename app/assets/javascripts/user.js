$(function(){
  function appendUserSearchResult(user){
    var html= `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>
                  `
    return html
  }

  function removeGroupUser(user_id,user_name){
    var html=`<div class='chat-group-user clearfix' id='chat-group-user-22'>
  }
  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
  <p class='chat-group-user__name'>${user_name}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>
    `
    return html
  }
  $(document).on('click',".chat-group-user__btn--add",function(){
    var user_id = $(this).attr('data-user-id');
    var user_name = $(this).attr('data-user-name');
    var html = removeGroupUser(user_id,user_name);
    $('#chat-group-users').append(html);
    $(this).parent().remove();
  });

  $(document).on('click', '.js-remove-btn', function(){
        $(this).parent().remove();
      });


  $('#user-search-field').on("keyup",function(){
    var input =$(this).val();
    $.ajax({
      url:'/users',
      type:'GET',
      data: { keyword: input },
      dataType: 'json',
    })
    .done(function(users){
      $('#user-search-result').empty();
      if (users.length !==0){
        users.forEach(function(user){
          var html = appendUserSearchResult(user);
          $("#user-search-result").append(html);
        });
      }

    })
    .fail(function(){
       alert('error');
    })
  });
});
