const Order = require('./../models/Order');

function create(req, res) {
    Order.create(req.body)
        .then(order => res.json(product).status(200))
        .catch(err => console.log(err));
}

function index(req, res) {
    Order.find({})
        .then((order) => res.json(order).status(200))
        .catch(err => console.log(err));
}

module.exports = {
    create,
    index
}