$(function(){
  function buildSendMessageHTML(message){
   var add_image = (message.image) ? `<p class="lower-meesage__image"><img src="${message.image}"></p>` : "";
    var html = `<div class="message"data-message-id="${message.id}">
                  <div class="message__user">${message.user_name}</div>
                  <div class="message__create">${message.created_at}</div>
                  <div class="lower-message">
                    <p class="lower-message__content">${message.content}</p>
                    ${add_image}
                  </div>
                </div>
`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildSendMessageHTML(message)

      $('.messages').append(html)
      $('#new_message')[0].reset()
      $('.messages').animate({
        'scrollTop': $('.messages')[0].scrollHeight

      })
    })
    .fail(function(){
      alert('error');
    });
  });
  setInterval(countup, 5000);
  if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    var countup = function(){
      var lastMessageId = $('.message').last().data('message-id');
      $.ajax({
      type: "GET",
      url: location.href,
      dataType: 'json',
      data: {last_message_id: lastMessageId},
      })
      .done(function(new_messages){
        new_messages.forEach(function(message){
          var html= buildSendMessageHTML(message);
          $(".messages").append(html);
          $('.messages').animate({
            scrollTop: $('.messages')[0].scrollHeight
          });
        });
      })
      .fail(function(){
        alert("自動メッセージ取得に失敗しました")
      })
    }
  }
})
