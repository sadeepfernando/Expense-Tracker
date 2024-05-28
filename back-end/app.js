const express = require('express');
const http =  require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/db');
const {transactionsRoute} =require('./routes/index');
const bodyParser = require('body-parser');

dotenv.config();

const port = process.env.PORT || 8000;



//Database connection
dbConnection();

const app = express();

const server = http.createServer(app);
//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use('/api/v1/', transactionsRoute );

app.get('/', (req,res) =>{
    res.send('this is a get request');
})

app.listen(port, () =>{
    console.log(`You are listening to port : ${port}`);
});