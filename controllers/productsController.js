const Product = require('./../models/Product');

function index(req, res) {
    Product.find({})
        .then((product) => res.json(product).status(200))
        .catch(err => console.log(err));
}

module.exports = { index }