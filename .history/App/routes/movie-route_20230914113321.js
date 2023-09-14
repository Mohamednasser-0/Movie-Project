const express = require("express");
const movie = require("../models/model-movie");
const mroute = express.Router();

mroute.get("/", async (req,res) =>{
    const movies = await movie.find({}).limit(5);
    res.send(movies);
})

ةrouter.post("/", (req,res) =>{
    const body = req.body;
    const newmovie = new movie({
        title: {type:String, required:true},
    Director: {type:String, required:true},
    rating: {type:Number, required:true},
    Cast: {type:Array, required:true},
    Year:{type:Number,required:true}
    });
    newprd.save();
    res.send(newprd);
});















module.exports = mroute;