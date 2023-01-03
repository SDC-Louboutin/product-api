var models = require('../models/index.js');

const getProductStyles = (req, res) => {
  console.log('the request data is: ', req.params.product_id);
  let id = req.params.product_id;
  models.getProductStyles(id)
    .then((styles) => {
      models.getProductInfo(id)
        .then((data) => {
          console.log('styles data inside styles controller', styles);
          console.log('data inside styles controller', data);
          res.send(styles);
        })
        .catch((err) => {
          res.send(err)
        })
    })
    .catch((err) => {
      res.send(err)
    })
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
  getProductStyles
}