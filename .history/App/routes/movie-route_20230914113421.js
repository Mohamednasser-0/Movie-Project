const express = require("express");
const movie = require("../models/model-movie");
const mroute = express.Router();

mroute.get("/", async (req,res) =>{
    const movies = await movie.find({}).limit(5);
    res.send(movies);
})
mةrouter.post("/", (req,res) =>{
    const body = req.body;
    const newmovie = new movie({
    title: body.title,
    Director: body.Director,
    rating: body.rating,
    Cast: body.Cast,
    Year:body.Year
    });
    newprd.save();
    res.send(newmovie);
});















module.exports = mroute;