exports.errorHandler = (err, req, res, next) => {
  console.log("word error" + err);
  res.status(400).send("Invalid token");
  next();
};
