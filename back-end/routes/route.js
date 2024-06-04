const express = require('express');
const router = express.Router();

router.route('/api/categories').get((req, res) =>{
    res.json({message:'This is a get route'});
})



module.exports = router;