var controller = require('../controllers/index.js');
var router = require('express').Router();

// router.get('/products:product_id', controller.);
// router.get('/products:product_id/styles', controller. );
// router.get('/products:product_id/related', controller.);
router.get('/products', controller.allProducts);

module.exports = router;