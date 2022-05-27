const wordService = require("../services/word.service");
const wordValidator = require("../utils/validators/word.validate");
const response = require("../utils/response.utils");

const {
  ADD_word_SUCCESS,
  UPDATE_word_SUCCESS,
  DELETE_word_SUCCESS,
} = require("../configs/message.config");

exports.addword = async (req, res, next) => {
  // validate the params
  const validation = wordValidator.addValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, {}, validation.error);
  }

  try {
    const newword = await wordService.addword(validation.value);
    response.successRes(res, ADD_word_SUCCESS, newword);
  } catch (err) {
    next(err);
  }
};

exports.updateword = async (req, res, next) => {
  //validate the request
  const validation = wordValidator.updateValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }

  try {
    const updateword = await wordService.updateword(
      validation.value._id,
      validation.value
    );
    if (updateword) {
      response.successRes(res, UPDATE_word_SUCCESS, updateword);
    } else {
      response.badRequest(res, "word not found", validation.value);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteword = async (req, res, next) => {
  const validation = wordValidator.deleteValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }
  try {
    const wordId = validation.value._id;
    await wordService.removeword(wordId);
    response.successRes(res, DELETE_word_SUCCESS);
  } catch (err) {
    next(err);
  }
};

exports.getAllwords = async (_, res, next) => {
  try {
    const words = await wordService.getAllwords();
    response.successRes(res, "", words);
  } catch (err) {
    next(err);
  }
};
