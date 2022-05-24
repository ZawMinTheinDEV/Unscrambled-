const dotenv = require("dotenv");

const express = require("express");

const customerRoute = require("./src/routes/customer.route");

const userRoute = require("./src/routes/user.route");
dotenv.config();
const app = express();

//default middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/customer", customerRoute);

app.use("/api/user", userRoute);
app.listen(4000, () => console.log(" Alive on 4000"));
