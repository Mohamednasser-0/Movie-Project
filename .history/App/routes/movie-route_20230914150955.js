const express = require("express");
const movie = require("../schema/model-movie");

const mroute = express.Router();


// GET all Movies from the data base
mroute.get("/", async (req,res) =>{

    let page = Number(req.query.page);
    let title = req.query.title;
    let year = Number(req.query.year)
    const movies = await movie.find({title:{$regex:${title},Year:year}).limit(page*5).skip((page-1)*5);
    res.send(movies);
    
});

// Add New movie to the database
mroute.post("/", (req,res) =>{
    const body = req.body;
    const newmovie = new movie({
    title: body.title,
    Director: body.Director,
    rating: body.rating,
    Cast: body.Cast,
    Year:body.Year
    });
    newmovie.save();
    res.send(newmovie);
});

// Add and modifies data got from server to the database
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

//DELETE movie from database
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