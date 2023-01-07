var db = require('../db.js');
const { Products, Skus, Styles, Photos, Related, Features } = require('../db.js')

const allProductsModel = (skip, count) => {
  console.log('allProducts Page and Count is: ', skip, count);
  return Products.find().skip(skip).limit(count);
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
  return Styles.find({productId: id}).exec();
}

const getProductPhotos = (id) => {
  console.log('inside getProductPhotos models', id);
  return Photos.find({styleId: id}).populate('styleId').exec();
}

const getProductSkus = (id) => {
  console.log('inside getProductSkus models', id);
  return Skus.find({styleId: id}).populate('styleId').exec();
}

const getProductRelated = (id) => {
  console.log('inside getProductRelated models', id);
  return Related.find({current_product_id: id});
}

module.exports = {
  allProductsModel,
  getProductInfoFeature,
  getProductInfo,
  getProductStyles,
  getProductPhotos,
  getProductSkus,
  getProductRelated
}

