const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    Product_Title:String,
    Product_Description:String,
    Price:Number,
    reviews : String
});

const productModel = mongoose.model('Products',productSchema);

module.exports= productModel;