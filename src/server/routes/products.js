var express = require('express');
var router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
var productController = require('../controllers/products');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test);

router.get('/test', productController.All);


router.post('/create', productController.product_create);

router.get('/:id', productController.product_details);

router.put('/:id/update', productController.product_update);

router.delete('/:id/delete', productController.product_delete);


module.exports = router;