import $ from 'jquery'

$(document).ready(() => {
  document.addEventListener("mousemove", () => {
    $.ajax({
       url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
       type: 'get',
       success: function(data){
         var word = JSON.stringify(data.word)
         $('#this-one').text(word);
       }
    });
  });

  $("button").click(() => {
    var array = document.getElementsByTagName('textarea')[0].value.split(" ")
    array.forEach((word) => {
      var json = {"word": {"value": `${word}`}}
      $.ajax({
         url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
         type: 'post',
         data: json,
         success: function(msg){
         }
      });
    })
  })
})
