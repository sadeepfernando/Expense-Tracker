const { Category, Transaction } = require('../models/Model');


const getCategories =  (req, res) =>{
    const category = new Category({
        type : 'Savings',
        color : '#1F3B5c'
    });

    if(!category){
        res.code = 400;
        throw new Error('Category not found');
    }
     category.save();
     res.status(200)
     .json({code:200, message:'category saved successfully', data:{category}})
}




module.exports =
{
    getCategories,
}