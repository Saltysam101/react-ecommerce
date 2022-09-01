require("dotenv").config();

const express = require("express");
const connectDB = require('./config/db')

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('hello server')
})


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})