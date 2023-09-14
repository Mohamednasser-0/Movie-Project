const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    title: {type:String, required:true},
    price: {type:Number, required:true},
    rating: {type:Number, required:true},
    number_of_stocks: {type:Number, required:true}
})

const Product = mongoose.model("product", productschema);

module.exports = Product;