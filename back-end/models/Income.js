const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema(
    {
        title: {type : String, required : true, trim : true, maxeLength : 50},
        amount: {type : Number, required : true, maxeLength : 20, trim : true},
        type: {type : String, default : 'Income'},
        date: {type : Date, required : true, trim : true},
        category: {typr : String, required : true, trim : true},
        description: {typr : String, required : true, trim : true}
    },
    {timestamps : true}
)

const IncomeModel = mongoose.model('income',IncomeSchema);

module.exports =
{
    IncomeModel
}