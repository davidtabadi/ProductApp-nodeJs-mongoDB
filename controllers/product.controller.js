// require the product.model to use it here
const Product = require('../models/product.model');

// implementing the test route we created in route.js
exports.test = function (req, res) {
        res.send('Test woks good');
};


// product_create implementation - create new and save
exports.product_create = function (req, res) {
        // create new product
        let product = new Product(
                {
                        name: req.body.name,
                        price: req.body.price,
                        description: req.body.description
                }
        );
        // Validate request
        if (!req.body) {
                return res.status(400).send({
                        message: "Product can not be empty"
                });
        }
        // save the new product in Data Base
        product.save()
                .then(product => {
                        res.send(product);
                }).catch(err => {
                        res.status(500).send({
                                message: err.message || "Some error occurred while creating the Product."
                        });
                });
};


// get_all_products implementation 
exports.get_all_products = function (req, res) {
        Product.find()
                .then(Product => { res.send(Product); })
                .catch(err => {
                        res.status(500).send({
                                message: err.message || "Some error occurred while retrieving products."
                        });
                });

};


// get_product implementation
exports.get_product = function (req, res) {
        Product.findById(req.params.id).
                then(product => {
                        if (!product) {
                                return res.status(404).send({
                                        message: "Product not found with id " + req.params.id
                                });
                        }
                        res.send(product);
                }).
                catch(err => {
                        if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                        message: "Product not found with ID: " + req.params.id
                                });
                        }
                        return res.status(500).send({
                                message: "Error retrieving product with ID: " + req.params.id
                        });
                });
};


// product_update implementation 
exports.product_update = function (req, res) {
        // Find product and update it with the request body
        Product.findByIdAndUpdate(req.params.id,
                { $set: req.body })
                .then(product => {
                        if (!product) {
                                return res.status(404).send({
                                        message: "Product not found with ID: " + req.params.id
                                });
                        }
                        res.send(req.body);
                }).catch(err => {
                        if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                        message: "Product not found with ID: " + req.params.id
                                });
                        }
                        return res.status(500).send({
                                message: "Error updating product with id " + req.params.id
                        });
                });
};


// product_delete implementation 
exports.product_delete = function (req, res) {
        Product.findByIdAndRemove(req.params.id).
                then(product => {
                        if (!product) {
                                return res.status(404).send({
                                        message: "Product not found with ID: " + req.params.id
                                });
                        }
                        res.send({ message: "Product deleted successfully!" });
                }).catch(err => {
                        if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                        message: "Product not found with ID: " + req.params.id
                                });
                        }
                        return res.status(500).send({
                                message: "Could not delete product with ID: " + req.params.id
                        });
                });

};






