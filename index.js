const dotenv = require("dotenv");

const express = require("express");

const mongoose = require("mongoose");

const customerRoute = require("./src/routes/customer.route");

const userRoute = require("./src/routes/user.route");
dotenv.config();
const app = express();

//default middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongodb connection
mongoose.connect("mongodb://localhost:27017/scrabble", () =>
  console.log("mongoose connected")
);

app.use("/api/customer", customerRoute);

app.use("/api/user", userRoute);
app.listen(4000, () => console.log(" Alive on 4000"));
