const express = require('express');
const router = express.Router();

const homeRoute = router.get('/', (req,res,next) =>{
    res.send('Hello HomePage');
})


module.exports = 
{
    homeRoute,
}