var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const productModel = require('../models/products.model');
// Get all Products
router.get('/list',function(req,res,next){
    console.log(mongoose.connection.readyState)
   
    productModel.find(function(err,productListResponse){
        if(err){
            res.send({status:500,message:"Unable to Find Products"});
        }else{
            const recordCount = productListResponse.length;
            res.send({status:200,recordCount:recordCount,results:productListResponse})
        }
    })
});
// Get Specific Products
router.get('/view',function(req,res,next){
    console.log(mongoose.connection.readyState)
   
    var productID = req.query.productID;
// productID="639ec95837713c1e594f9acf";


    productModel.findById(productID,function(err,productResponse){
        if(err){
            res.send({status:500,message:"Unable to Find Product"});
        }else{
            
            res.send({status:200,results:productResponse})
        }
    })
});

// Add Products
router.post('/add',function(req,res,next){

    let Product_Title = req.body.Product_Title;
    let Product_Description = req.body.Product_Description;
    let Price = req.body.Price;


let productObj = new productModel({
    Product_Title:Product_Title,
    Product_Description:Product_Description,
    Price:Price
    
});
productObj.save(function(err,productObj){
    if(err){
        res.send({status:500,message : "Unable to add products",productDetails:productObj});
    }else{
        res.send({status:200,message : "Succesfully added Products",productDetails:productObj});
    }
    
})



    // res.send('repond with a resourse');
});
// Update Products
router.put('/update',function(req,res,next){
    console.log(mongoose.connection.readyState)
   
    const productID = req.body.productID;

    let Product_Title = req.body.Product_Title;
    let Product_Description = req.body.Product_Description;
    let Price = req.body.Price;
    



    var productObj = {
        Product_Title:Product_Title,
        Product_Description:Product_Description,
        Price:Price
        
    };
// productModel.update({dept:cse})
    productModel.findByIdAndUpdate(productID,productObj,function(err,productResponse){
        if(err){
            res.send({status:500,message:"Unable to Update Product"});
        }else{
          
            res.send({status:200,message:"Product Updated Successfully" , result:productResponse});
        }
    })
});
// Delete Products
router.delete('/delete',function(req,res,next){
    console.log(mongoose.connection.readyState)
   
    const productID = req.query.productID;

   

    productModel.findByIdAndDelete(productID,function(err,productResponse){
        if(err){
            res.send({status:500,message:"Unable to delete Product"});
        }else{
            const recordCount = productResponse.length;
            res.send({status:200,message:"Product Deleted Successfully",results:productResponse})
        }
    })
});
// Delete all Products
router.delete('/delete-multiple',function(req,res,next){
    console.log(mongoose.connection.readyState)
   
    const productID = req.query.productID;

   

    productModel.deleteMany({"firstName":"Mark"},function(err,productResponse){
        if(err){
            res.send({status:500,message:"Unable to delete Product"});
        }else{
            
            res.send({status:200,message:"products Deleted Successfully"})
        }
    })
});
// search Products
router.delete('/search',function(req,res,next){
    res.send('repond with a resourse');
});

//Add Product Reviews
router.put('/addreview',function(req,res,next){
    console.log(mongoose.connection.readyState)
   
    const productID = req.body.productID;

    let reviews = req.body.reviews;
    
    



    var productObj = {
        reviews:reviews,
        
        
    };
// productModel.update({dept:cse})
    productModel.findByIdAndUpdate(productID,productObj,function(err,productResponse){
        if(err){
            res.send({status:500,message:"Unable to Update Product Review"});
        }else{
          
            res.send({status:200,message:"Product Updated Successfully Review" , result:productResponse});
        }
    })
});

module.exports = router;