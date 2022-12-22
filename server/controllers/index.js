var models = require('../models/index.js');

const allProducts = (req, res) => {
  console.log('inside get controller');
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
  allProducts
}