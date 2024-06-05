const express = require('express');
const router = express.Router();
const category = require('../controllers/controller')

//Category route section
router.route('/api/categories')
            .post(category.createCategories)
            .get(category.getCategories)

//Transactions section
router.route('/api/transactions')
            .post(category.createTransactions)
            .get(category.getTransactions)
            .delete(category.deleteTransaction)

//Aggregate both sections
router.route('/api/labels')
            .get(category.getLabels)



module.exports = router;