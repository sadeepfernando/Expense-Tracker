const { IncomeModel } = require("../models/Income");

const addIncomeController = async(req,res) =>{
    try {
        const {title, amount, category, description, date} = req.body;

        const income = new IncomeModel({
            title,
            amount,
            category,
            description,
            date
        });

    //validation
    if(!title || !category || !description || !date){
        return res.status(400).json({message : 'All fields are required'})
    }
    if(amount <= 0 || !amount === 'number'){
        return res.status(400).json({message : 'Amount should be a positive number'});
    }

    await income.save();
    res.status(200).json({message : 'Income data added successfully'});

    } catch (error) {
        
    }
}


module.exports = 
{
    addIncomeController
}