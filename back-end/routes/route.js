const express = require('express');
const router = express.Router();
const categories = require('../controllers/controller')

//Category route section
router.route('/api/categories')
            .post(categories.createCategories)
            .get(categories.getCategories)

//Transactions section
router.route('/api/transactions')
            .post(categories.createTransactions)
            .get(categories.getTransactions)
            .delete(categories.deleteTransaction)

//Aggregate both sections
router.route('/api/labels')
            .get(categories.getLabels)



module.exports = router;