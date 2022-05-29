const wordService = require("../services/word.service");
const wordValidator = require("../utils/validators/word.validate");
const response = require("../utils/response.utils");

exports.getAllWords = async (_, res, next) => {
  try {
    const allWords = await wordService.getAllWords();

    response.successRes(res, "", { allWords });
  } catch (err) {
    next(err);
  }
};

exports.getWordsById = async (_, res, next) => {
  try {
    response.successRes(res, "", words);
  } catch (err) {
    next(err);
  }
};
