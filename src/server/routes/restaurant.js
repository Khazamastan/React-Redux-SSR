var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var restaurantController = require('../controllers/restaurants');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', restaurantController.test);

router.get('/', restaurantController.All);


router.get('/:id', restaurantController.restaurant_details);

router.post('/create', restaurantController.restaurant_create);

router.put('/:id/update', restaurantController.restaurant_update);

router.delete('/:id/delete', restaurantController.restaurant_delete);


module.exports = router;