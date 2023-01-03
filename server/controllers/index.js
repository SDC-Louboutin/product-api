var models = require('../models/index.js');

const getProductRelated = (req, res) => {
  console.log('the request data is: ', req.params.product_id);
  let id = req.params.product_id;
  models.getProductRelated(id)
    .then((related) => {
      console.log(related);
      const allRelatedProducts = [];
      for (let i = 0; i < related.length; i += 1) {
        allRelatedProducts.push(related[i].related_product_id);
      }
      res.send(allRelatedProducts);
    })
    .catch((err) => {
      res.send(err)
    })
}

const getProductStyles = async (req, res) => {
  console.log('the request data is: ', req.params.product_id);
  let id = req.params.product_id;
  const obj = {};
  try {
    const styles = await models.getProductStyles(id);
    obj['product_id'] = id;
    obj['results'] = [];
    for (let i = 0; i < styles.length; i += 1) {
      const eachStyle = styles[i].toObject();
      const photos = await models.getProductPhotos(styles[i].id);
      delete photos['_id'];
      delete photos['id'];
      delete photos['styleId'];
      console.log(photos);
      eachStyle['photos'] = photos;
      const skus = await models.getProductSkus(styles[i].id);
      console.log(skus);
      eachStyle['skus'] = skus;
      obj['results'].push(eachStyle);
    }
    res.send(obj);
  } catch(error) {
    res.send(error);
  }
}

const getProductInfo = (req, res) => {
  console.log('the request data is: ', req.params.product_id);
  let id = req.params.product_id;
  models.getProductInfoFeature(id)
    .then((feature) => {
      models.getProductInfo(id)
        .then((data) => {
          const obj = data[0].toObject();
          const filteredFeatures = [];
          for (let i = 0; i < feature.length; i += 1) {
            let eachFeature = {};
            eachFeature["feature"] = feature[i].feature;
            eachFeature["value"] = feature[i].value;
            filteredFeatures.push(eachFeature);
          }
          delete obj['_id'];
          obj["features"] = filteredFeatures;
          res.send(obj);
        })
        .catch((err) => {
          res.send(err)
        })
    })
    .catch((err) => {
      res.send(err)
    })
}

const allProducts = (req, res) => {
  models.allProductsModel()
    .then((data) => {
      console.log('we have successfully sent the data: ', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('we have error: ', err);
      res.send(err);
    })
};

module.exports = {
  allProducts,
  getProductInfo,
  getProductStyles,
  getProductRelated
}