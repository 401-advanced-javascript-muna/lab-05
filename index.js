'use strict';

const mongoose = require('mongoose');

const Categories =require('./schemas/categories-schema');

const Products =require ('./schemas/products-schema');

const MONGOOSE_URI ='mongodb://localhost:27017/cat-and-prod';

mongoose.connect(MONGOOSE_URI,{useNewUrlParser:true});

const clothing =new Categories({name:'clothing'});

clothing.save();

const dress =new Products({name:'dress',price:"75$",weight:"10g",quantityInStock:"255"});


dress.save();

