const express = require("express");
const movie = require("../schema/model-movie");

const mroute = express.Router();


// GET all Movies from the data base
mroute.get("/", async (req,res) =>{

    let page = Number(req.query.page);
    let name = req.query.name;
    let year = Number(req.query.year);
    let Cast = req.query.Cast;
    let Director = req.query.Director;
    let rating = Number(req.query.rating);

    if(page){
        if(name){
            const movies = await movie.find({title:name}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(year){
            const movies = await movie.find({Year:year}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(rating){
            const movies = await movie.find({rating:rating}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(Director){
            const movies = await movie.find({Director:Director}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(Cast){
            const movies = await movie.find({title:name}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
    }
    else{
        if(name){
            const movies = await movie.find({title:name}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(year){
            const movies = await movie.find({Year:year}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(rating){
            const movies = await movie.find({rating:rating}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(Director){
            const movies = await movie.find({Director:Director}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
        if(Cast){
            const movies = await movie.find({Cast:{}}).limit(page*5).skip((page-1)*5);
            res.send(movies);
        }
    }
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