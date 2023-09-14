require("dotenv").config();
const express = require("express");
const mongoose = ("mongoose");
const console = require('./middleware/logger').console;
const mroute = require("./routes/movie-route");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({extende:true}));
app.use(express.json());
mongoose
.connect(process.env.CONNECTION_STRING,{})
.then(() =>{
    console.log("MongoDB is running")
})
.catch((e) =>{
    console.log(e);
})
app.use("/movies", mroute);
app.listen(p)



