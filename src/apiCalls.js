const fetch = require("node-fetch");

async function topWord() {
  let response = await fetch(
    'https://wordwatch-api.herokuapp.com/api/v1/top_word'
  );
  let json_response = await response.json();
  let word = await json_response.word
  return word
}

module.exports = {
  topWord
}
