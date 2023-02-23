const express = require("express");
require("./services/mongo");

const app = express();

app.use(express.json())

module.exports = app;