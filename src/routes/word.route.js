const wordController = require("../controllers/word.controller");
const wordError = require("../middlewares/errors/word.error.js");

const router = require("express").Router();

router.get("/all", wordController.getAllwords);
router.post("", wordController.addword);
router.put("", wordController.updateword);
router.delete("", wordController.deleteword);

router.use(wordError.errorHandler);

module.exports = router;

/*
each component with CRUD will be in seperate route file.
each route will use each controller and error handler.
*/