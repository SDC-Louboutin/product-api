var db = require('../db.js');
const { Products, Skus, Styles, Photos, Related } = require('../db.js')

const allProductsModel = () => {
  console.log('inside models for allProducts');
  return Products.find();
};

module.exports = {
  allProductsModel
}

