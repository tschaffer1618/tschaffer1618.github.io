import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
     url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
     type: 'get',
     success: function(data){
         $('#this-one').text(JSON.stringify(data.word));
     }
  });

  var array = ["chicken", "chicken", "chicken"]
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
