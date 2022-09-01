require("dotenv").config();

const express = require("express");
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json())

app.use('/api/products', productRoutes)


app.get('/', (req, res) => {
    res.send('hello server')
})


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})