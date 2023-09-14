const mongoose = require("mongoose");

const movieschema = new mongoose.Schema({
    title: {type:String, required:true},
    Director: {type:String, required:true},
    rating: {type:Number, required:true},
    Cast: {type:Array, required:true},
    Year:{type:N}
})

const movie = mongoose.model("movie", movieschema);

module.exports = movie;