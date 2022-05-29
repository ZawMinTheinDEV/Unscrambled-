const fs = require("fs");
const util = require("util");

exports.init_withAllWords = async () => {
  const words = await getWordsFromFile();

  console.log(words.length);
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
