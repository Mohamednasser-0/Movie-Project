const express = require("express");
const movie = require("../models/model-movie");
const mroute = express.Router();


// GET 5 Movies from the data base
mroute.get("/", async (req,res) =>{
    const movies = await movie.find({}).limit(5);
    res.send(movies);
})

// Add New 
mroute.post("/", (req,res) =>{
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

mroute.put("/:id",async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const upmovie = await movie.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(upmovie);
});

mroute.delete("/:id",async(req,res) =>{
    const id = req.params.id;
    const body = req.body;

    
    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const dlmovie = await movie.findByIdAndDelete(id);
   res.send(dlmovie);
});














module.exports = mroute;