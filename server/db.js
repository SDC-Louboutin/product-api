import mongoose = reuquire('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id:  Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  category:   String
  default_price: Number,
});

const skusSchema = new Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
});

const stylesSchema = new Schema({
  id: Number,
  productId: Number,
  name: String,
  slae_price: Number,
  original_price: Number,
  default_style: Number
});

const photosSchema = new Schema({
  id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String
});

const relatedSchema = new Schema({
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
