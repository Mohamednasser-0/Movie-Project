 require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mroute = require("./routes/movie-route");
const logger = require("./middleware/logger")


const PORT = process.env.PORT || 3000;
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
app.use(logger)

app.listen(PORT,() =>{
    console.log('Server is running on port ' + PORT)
});




