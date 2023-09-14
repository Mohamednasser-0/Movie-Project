const mongoose = require("mongoose");

const movieschema = new mongoose.Schema({
    title: {type:String, required:true},
    Director: {type:String, required:true},
    rating: {type:Number, required:true},
    Cast: {type:Array, required:true}
})

const Product = mongoose.model("movie", movieschemaschema);

module.exports = Product;