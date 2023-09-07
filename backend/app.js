const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
const router = require("./src/router");
app.use(router);

module.exports = app;
