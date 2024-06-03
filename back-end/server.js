const express = require('express');
const http =  require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/db');
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
app.use('/api/v1/',  );


app.listen(port, () =>{
    console.log(`You are listening to port : ${port}`);
});