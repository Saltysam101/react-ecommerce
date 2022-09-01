require('dotenv').config()

const connectDB = require('./config/db');
const productData = require('./data/products');
const Product = require('./models/Product');

connectDB();

const importData = async() => {
    try {
        await Product.deleteMany({})

        await Product.insertMany(productData)

        console.log('data import succeeded')
        process.exit();
    } catch (error) {
        console.error('data import failed', error)
        process.exit(1)
    }
}

importData();