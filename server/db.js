const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product')
  .then(() => {
    console.log('connected');
  }).catch(() => {
    console.log('error in connecting to mongoose');
  })

// command to import the csv file
// mongoimport --type csv -d product -c products --headerline --drop product.csv  //uploaded
// mongoimport --type csv -d product -c skus --headerline --drop skus.csv //uploaded
// mongoimport --type csv -d product -c styles --headerline --drop styles.csv //uploaded
// mongoimport --type csv -d product -c photos --headerline --drop photos.csv
// mongoimport --type csv -d product -c related --headerline --drop related.csv //uploaded

const productSchema = new mongoose.Schema({
  id:  Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
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

const Products = mongoose.model('Product', productSchema);
const Skus = mongoose.model('Skus', skusSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const Photos = mongoose.model('Photos', photosSchema);
const Related = mongoose.model('Related', relatedSchema);

// mini test
// Products.insert({id: 6})
//   .then((result) => {
//     console.log('the result is', result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

module.exports.Products = Products;
module.exports.Skus = Skus;
module.exports.Styles = Styles;
module.exports.Photos = Photos;
module.exports.Related = Related;
