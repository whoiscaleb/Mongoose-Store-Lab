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
        Product: allProducts
    }
    );
}); 

// N is for NEW
app.get('/products/new', (req, res) => {
	res.send('new');
});

// D is for DELETE
app.delete('/products/:id', async(req, res) => {
    await Product.findbByIdAndDelete(req.params.id);
    res.redirect('/product');
});

// U is for UPDATE
app.put('/product/:id', async (req, res) => {
    await Product.findByAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.redirect('/product');
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

// E is for EDIT
app.get ('product/:id/edit', async (req,res) => {
    const foundProduct= await Product.findById (reg.params.id).exec();
    res.render('edit.ejs', {Product: seedProduct });
})
// S is for SHOW
app.get('/products/:id', async(req, res) => {
    let i = req.params.id
    let foundProducts = await Product.find({})
    res.render("show.ejs", {product: foundProducts[i]});

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));