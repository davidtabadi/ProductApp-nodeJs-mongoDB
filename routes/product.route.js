// require express and initialize by express.Router()
const express = require('express');
const router = express.Router();

// require product_controller from controllers
const product_controller = require('../controllers/product.controller');

// simple test route just to check all files are communicating correctly.
router.get('/test', product_controller.test);

// HTTP POST request - create new product
router.post('/create', product_controller.product_create);

// HTTP GET request - get all products 
router.get('/', product_controller.get_all_products);

// HTTP GET by ID request - get_product
router.get('/:id', product_controller.get_product);

// HTTP PUT request - product_update
router.put('/:id/update', product_controller.product_update);

// HTTP DELETE request - product_delete
router.delete('/:id/delete',
        product_controller.product_delete);

// Export the router to use it in other files of the project
module.exports = router;