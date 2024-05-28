const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/db');

dotenv.config();

const port = process.env.PORT || 8000;

//Database connection
dbConnection();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req,res,next) =>{
    res.send('this is a get request');
})

app.listen(port, () =>{
    console.log(`You are listening to port : ${port}`);
});