const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Craete a model for categories with (type, color)
const categorySchema = new Schema({
    type : {type:String, default:'Investments'},
    color : {type:String, default:'#FCBE44'}
});



//Create a model for transactions with (name,  type,amount,date)
const transactionSchema = new Schema({
    name : {type:String, default:'Anonymouse'},
    type : {type:String, default:'Investments'},
    amount : {type:Number},
    date : {type:Date, default:Date.now},
});

const Transaction = mongoose.model('transactions', transactionSchema);
const Category = mongoose.model('categories', categorySchema);

exports.default = Transaction;
module.exports = {Category, Transaction}