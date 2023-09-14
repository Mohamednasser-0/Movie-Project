const mongoose = require("mongoose");

const movieschema = new mongoose.Schema({
    title: {type:String, required:true},
    Director: {type:String, required:true},
    rating: {type:Number, required:true},
    Cast: {type:Ar, required:true}
})

const Product = mongoose.model("product", productschema);

module.exports = Product;