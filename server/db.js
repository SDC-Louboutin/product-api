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
// mongoimport --type csv -d product -c features --headerline --drop features.csv //uploaded

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

const featuresSchema = new mongoose.Schema({
  id: Number,
  feature: String,
  value: String,
  product_id: {
    type: Number,
    ref: 'Product',
    required: true
  }
});

const productFeatureSchema = new mongoose.Schema({
  id:  Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Features'
  }
});
// features: [{ type: Number, ref: 'Features', refPath: 'product_id'}]

// productFeatureSchema.statics.populateFeatures = () => {
//   return this.find({})
//     .populate({
//       path: 'features',
//       match: { product_id: { $eq: 'id' } },
//       select: 'product_id',
//       options: { lean: true }
//     })
//     .exec((error, products) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(products);
//       }
//     });

// testing productFeatures with populate //empty features function
// productFeatureSchema.statics.populateFeatures = function() {
//   return this.find()
//     .populate({
//       path: 'features',
//       match: { product_id: { $eq: 'id' } },
//       select: 'product_id',
//       options: { lean: true }
//     })
//     .exec();
// };

const Products = mongoose.model('Product', productSchema, 'products');
const ProductsFeatures = mongoose.model('ProductFeatures', productFeatureSchema, 'products');
const Skus = mongoose.model('Skus', skusSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const Photos = mongoose.model('Photos', photosSchema);
const Related = mongoose.model('Related', relatedSchema, 'related');
const Features = mongoose.model('Features', featuresSchema);

// mini test
// Products.insert({id: 6})
//   .then((result) => {
//     console.log('the result is', result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// second mini test
// ProductsFeatures.find({id: 5})
//   .populate({
//     path: 'features',
//     model: 'Features',
//     select: 'feature',
//     match: { product_id: 5 }
//   })
//   .then((data) => console.log('the data is', data))
//   .catch((err) => console.log(err));

// third mini test
// ProductsFeatures.find({id: 5}).populate({ path: 'features', select: 'feature' })
//   .then((data) => console.log('console logging data: ', data));

//   Features.find({product_id: 5})
//     .then((data) => console.log(data));

// chaptGpt3 Code
// Products.find({id: 5})
//   .populate({
//     path: 'features',
//     match: { product_id: { $eq: 'id' } },
//     select: 'product_id',
//     options: { lean: true }
//   })
//   .exec((error, products) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(products);
//     }
//   });

module.exports.Products = Products;
module.exports.ProductsFeatures = ProductsFeatures;
module.exports.Skus = Skus;
module.exports.Styles = Styles;
module.exports.Photos = Photos;
module.exports.Related = Related;
module.exports.Features = Features;


// lookup test
// db.products.aggregate( [
//   {
//     $lookup:
//       {
//         from: "features",
//         localField: "id",
//         foreignField: "product_id",
//         as: "features"
//       }
//  }
// ] )

// async function populateFeatures() {
//   const features = await ProductsFeatures.aggregate([
//     {
//       $lookup: {
//         from: 'features',
//         localField: 'id',
//         foreignField: 'product_id',
//         as: 'features'
//       }
//     }
//   ]);
//   console.log('the features are', features);
// }

// populateFeatures()
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => {
//     console.log(error);
//   });