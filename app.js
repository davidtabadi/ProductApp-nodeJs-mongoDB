// import all requires for the app
const express = require('express');
const bodyParser = require('body-parser');

// mongoDB connection code - require mongoose
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/Products';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console,
        'mongoDB connection Error'));

// require routes for the products
const product = require('./routes/product.route');

// initialize express app, creates express application
const app = express();

// use body-parser (to json) in our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use product (define '/products' url and bind it to product) 
app.use('/products', product);

// declare port number and tell express app to listen to port.
let port = 1234;

app.listen(port, () => {
        console.log("Server is Up and listens to port: " + port);
});

