const dotenv = require("dotenv");

const express = require("express");

const wordRoute = require("./src/routes/word.route");

dotenv.config();
const app = express();

//default middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/word", wordRoute);

app.listen(4000, () => console.log(" Alive on 4000"));
