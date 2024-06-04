const express = require('express');
const router = express.Router();
const categories = require('../controllers/controller')


router.route('/api/categories').post(categories.getCategories);



module.exports = router;