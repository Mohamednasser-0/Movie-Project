const mongoose = require("mongoose");

const movieschema = new mongoose.Schema({
    title: {type:String, required:true},
    Director: {type:String, required:true},
    rating: {type:Number, required:true},
    Cast: {type:Number, required:true}
})

const Product = mongoose.model("product", productschema);

module.exports = Product;