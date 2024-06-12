const express = require ('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')


dotenv.config();

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)


app.listen(port, ()=> console.log(`Server Started on Port ${port}`))