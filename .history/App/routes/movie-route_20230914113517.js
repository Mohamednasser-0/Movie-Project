const express = require("express");
const movie = require("../models/model-movie");
const mroute = express.Router();

mroute.get("/", async (req,res) =>{
    const movies = await movie.find({}).limit(5);
    res.send(movies);
})
mrouter.post("/", (req,res) =>{
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

mrouter.put("/:id",async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const upprd = await product.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(upprd);
});

mrouter.delete("/:id",async(req,res) =>{
    const id = req.params.id;
    const body = req.body;

    
    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const dlprd = await product.findByIdAndDelete(id);
   res.send(dlprd);
});














module.exports = mroute;