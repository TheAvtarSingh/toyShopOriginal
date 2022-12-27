const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    
    username:{type:String,unique:true,require:true},
    password:{type:String,require:true},
   
});


module.exports= mongoose.model('admin',adminSchema);