const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies

// Routes
app.use('/api/users', userRouter);  // For all user-related routes
// app.use('/api/products', productRouter);  // For all product-related routes

module.exports = app;
