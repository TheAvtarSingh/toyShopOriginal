var express = require('express');
var router = express.Router();

// Get users Listings
router.get('/',function(req,res,next){
    res.send('repond with a resourse');
});

module.exports = router;