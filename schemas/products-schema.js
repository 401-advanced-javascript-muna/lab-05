'use strict';

const mongoose = require('mongoose');


const products = mongoose.Schema({
    name:{type: String,required:true},
    price: {type: String, required: true },
    weight: { type: String,required: true },
    quantityInStock: {type: String, required: true },
});

module.exports = mongoose.model('products', products);