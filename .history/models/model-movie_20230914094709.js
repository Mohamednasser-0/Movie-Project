const mongoose = require("mongoose");

const movieschema = new mongoose.Schema({
    title: {type:String, required:true},
    : {type:Number, required:true},
    rating: {type:Number, required:true},
    number_of_stocks: {type:Number, required:true}
})

const Product = mongoose.model("product", productschema);

module.exports = Product;