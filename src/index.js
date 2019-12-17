import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
     url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
     type: 'get',
     success: function(data){
         $('#this-one').text(JSON.stringify(data.word));
     }
  });
})
