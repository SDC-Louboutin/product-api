import mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id:  Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
});

const skusSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
});

const stylesSchema = new mongoose.Schema({
  id: Number,
  productId: Number,
  name: String,
  sale_price: Number,
  original_price: Number,
  default_style: Number
});

const photosSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String
});

const relatedSchema = new mongoose.Schema({
  id: Number,
  current_product_id: Number,
  related_product_id: Number
});

const Product = mongoose.model('Product', allProductSchema);
const Skus = mongoose.model('Skus', skusSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const Photos = mongoose.model('Photos', photosSchema);
const Related = mongoose.model('Related', relatedSchema);

module.exports.Product = Product;
