const mongoose = require('mongoose');


const dbConnection = async() =>{
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connection successfull');
    } catch (error) {
        console.log('Database connection fail');
    }
}


module.exports = dbConnection;