const word = require("../services/word.service");
let words;
module.exports.init = async function init() {
  await word.init_withAllWords();
  console.warn("Added data to list");
};
module.exports.words = this.words;
