const word = require("../services/word.service");
module.exports.intiRedis = async function intiRedis() {
  await word.initRedis_withAllWords();
  console.warn("Added data to redis");
};
