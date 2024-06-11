const express = require ('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db')

dotenv.config();

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.listen(port, ()=> console.log(`Server Started on Port ${port}`))