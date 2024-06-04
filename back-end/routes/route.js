const express = require('express');
const router = express.Router();
const categories = require('../controllers/controller')

//Category route section
router.route('/api/categories')
            .post(categories.createCategories)
            .get(categories.getCategories)



module.exports = router;