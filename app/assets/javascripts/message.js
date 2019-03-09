$(function(){
  function buildSendMessageHTML(message){
     var add_image ="";
    if(message.image){
      add_image = `<p class="lower-meesage__image"><img src="${message.image}"></p>`;
    }
    var html = `<div class="message">
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
      $('.input-box__text').val('')
      $('.messages').animate({
        'scrollTop': $('.messages')[0].scrollHeight
      })
    })
    .fail(function(){
      alert('error');
    })
  })
});
