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
        title:body.title,
        price:body.price,
        rating:body.rating,
        number_of_stocks:body.number_of_stocks
    });
    newprd.save();
    res.send(newprd);
});















module.exports = mroute;