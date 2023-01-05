var controller = require('../controllers/index.js');
var router = require('express').Router();

router.get('/products/:product_id/styles', controller.getProductStyles);
router.get('/products/:product_id/related', controller.getProductRelated);
router.get('/products/:product_id', controller.getProductInfo);
router.get('/products', controller.allProducts);
router.get(“/loaderio-28606ee82806c01aa6088a1eebf43920”, (req, res) => res.send(“loaderio-28606ee82806c01aa6088a1eebf43920”));

module.exports = router;