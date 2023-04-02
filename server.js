// Dependencies
const express = require('express');
const mongoose = require("mongoose")
const Product = require('./models/products');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: false }));



app.get('/products/new', (req, res) => {
    res.render('new.ejs')
})
// INDUCES

// I is for Index

// Index
app.get('/products', async (req, res) => {
    const allProducts = await Product.find({})
    res.render('index.ejs', {
        product: allProducts
    }
    );
}); 

// NEW 
app.get('/products/new', (req, res) => {
	res.send('new');
});

// C is for CREATE
app.post('/products', (req,res) => {
    if (req.body.completed === 'on') {
        //if checked, req.body.completed is set to 'on'
        req.body.completed = true;
    } else {
        //if not checked, req.body.completed is undefined
        req.body.completed = false;
    }
    const createdProduct = new Product(req.body)
    createdProduct.save().then(res.redirect('/products'))
})


// Show
app.get('/products/:id', async (req, res) => {
    const foundProducts= await Product.findById(req.params.id).exec()
    res.render('show.ejs', {
        product: foundProduct,
    });
}); 

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));