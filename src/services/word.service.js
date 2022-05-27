const word = require("../models/word.model.js");
const fs = require("fs");
exports.getAllwords = async () => {
  return await word.find();
};
exports.initRedis_withAllWords = async () => {
  await getWordsFromFile();
};

async function getWordsFromFile() {
  fs.readFile("data/words_alpha.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const words = data.split("\n");
    console.log(words.length);
  });
}
