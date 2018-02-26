const Order = require('./../models/Order');

function create(req, res) {
    let newOrder = new Order;

    newOrder.id = req.body.id;

    newOrder.save((err) => {
        if (err) console.log(err);
        Order.find({})
        .then(order => res.json(order).status(200));
    })
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