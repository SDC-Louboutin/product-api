var db = require('../db.js');
const { Products, Skus, Styles, Photos, Related, Features } = require('../db.js')

const allProductsModel = () => {
  return Products.find();
};

const getProductInfoFeature = (id) => {
  console.log('inside getProdutInfoFeatures models', id);
  return Features.find({product_id: id})
}

const getProductInfo = (id) => {
  console.log('inside getProdutInfo models', id);
  return Products.find({id: id})
}

const getProductStyles = (id) => {
  console.log('inside getProductStyles models', id);
  return Styles.find({productId: id});
}

const getProductPhotos = (id) => {
  console.log('inside getProductStyles models', id);
  return Styles.find({productId: id});
}

const getProductSkus = (id) => {
  console.log('inside getProductStyles models', id);
  return Styles.find({productId: id});
}

module.exports = {
  allProductsModel,
  getProductInfoFeature,
  getProductInfo,
  getProductStyles
}

