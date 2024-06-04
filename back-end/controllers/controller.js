const { Category, Transaction } = require('../models/Model');


const createCategories =  async(req, res) =>{
    const category = new Category({
        type : 'Investments',
        color : '#FCBE44'
    });

    if(!category){
        res.code = 400;
        throw new Error('Category not found');
    }
    await category.save();
     res.status(200)
     .json({code:200, message:'category saved successfully', data:{category}})
}

const getCategories = async(req, res) =>{

    const categories = await Category.find({})
                             .select('-_id');

    if(!categories){
        res.code = 404;
        throw new Error('Categories not found');
    }

    res.status(200)
    .json({code:200, status:true, message:'Categories found successfully', data:{categories}});
}

const createTransactions = (req,res) =>{
    const { name, type, amount } = req.body;

    const transaction = new Transaction();
}



module.exports =
{
    createCategories,
    getCategories,
}