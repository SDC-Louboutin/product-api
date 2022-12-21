const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product')
  .then(() => {
    console.log('connected');
  }).catch(() => {
    console.log('error in connecting to mongoose');
  })

// command to import the csv file
// mongoimport --type csv -d product -c product --headerline --drop product.csv
// mongoimport --type csv -d product -c skus --headerline --drop skus.csv
// mongoimport --type csv -d product -c styles --headerline --drop styles.csv
// mongoimport --type csv -d product -c photos --headerline --drop photos.csv
// mongoimport --type csv -d product -c related --headerline --drop related.csv

const productSchema = new mongoose.Schema({
  id:  Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_pric: Number
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

const Product = mongoose.model('Product', productSchema);
const Skus = mongoose.model('Skus', skusSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const Photos = mongoose.model('Photos', photosSchema);
const Related = mongoose.model('Related', relatedSchema);

module.exports.Product = Product;
module.exports.Skus = Skus;
module.exports.Styles = Styles;
module.exports.Photos = Photos;
module.exports.Related = Related;
