var controller = require('../controllers/index.js');
var router = require('express').Router();

router.get('/products/:product_id/styles', controller.getProductStyles);
// router.get('/products/:product_id/related', controller.);
router.get('/products/:product_id', controller.getProductInfo);
router.get('/products', controller.allProducts);

module.exports = router;