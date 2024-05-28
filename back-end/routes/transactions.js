const express = require('express');
const router = express.Router();
const { addIncomeController } = require('../controllers/income');


 router.post('/add-income', addIncomeController);


module.exports =  router
