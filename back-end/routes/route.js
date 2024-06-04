const express = require('express');
const router = express.Router();
const categories = require('../controllers/controller')


router.route('/api/categories').get(categories.getCategories);



module.exports = router;