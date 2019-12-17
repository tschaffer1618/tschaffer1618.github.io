import $ from 'jquery'

// var apiCalls = require('./apiCalls')
// var topWord = apiCalls.topWord()

$(document).ready(() => {
  // var article = document.getElementsByClassName('word-count')[0]
  // var newParagraph = document.createElement("p")
  // var newText = document.createTextNode(`${topWord}`)
  //
  // article.appendChild(newParagraph.appendChild(newText))

  $.ajax({
               url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
               type: 'get',
               success: function(data){
                   // var article = document.getElementsByClassName('word-count')[0]
                   // var newParagraph = document.createElement("p")
                   // var newText = document.createTextNode(`${data.word}`)
                   // console.log(data.word)
                   // article.appendChild(newParagraph.appendChild(newText))

                   // If the success function is execute,
                   // then the Ajax request was successful.
                   // Add the data we received in our Ajax
                   // request to the "content" div.
                   $('#this-one').text(JSON.stringify(data.word));
               }
           });
})
