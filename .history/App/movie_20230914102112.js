require("dotenv").config();
const express = require("express");
const mongoose = ("mongoose");
const console = require('./middleware/logger').console;
const mroute = require("./routes/movie-route");
const PORT = process.env.PORT || 3000;
const app = express();



