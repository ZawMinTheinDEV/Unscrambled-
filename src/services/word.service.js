const fs = require("fs");
const util = require("util");
var words;
exports.init_withAllWords = async () => {
  words = await getWordsFromFile();

  console.log(words.length);
};

exports.getAllWords = async () => {
  return words;
};

async function getWordsFromFile() {
  const data = await readData();

  const words = data.split("\n");
  return words;
}
async function readData() {
  return new Promise((resolve, reject) => {
    fs.readFile("data/words_alpha.txt", "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
