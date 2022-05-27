const word = require("../models/word.model.js");

exports.addword = async (word) => {
  newword = new word(word);
  return await newword.save();
};

exports.removeword = async (id) => {
  await word.findByIdAndRemove(id);
};

exports.updateword = async (id, word) => {
  return await word.findByIdAndUpdate(id, word);
};

exports.getAllwords = async () => {
  return await word.find();
};

/*
service will use models to work with database.
this is the only place where db query run.
*/
