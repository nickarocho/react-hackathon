const Order = require('./../models/Order');
const Product = require('./../models/Product')

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
    Order.findOne({})
        .populate('products')
        .exec(function(err, order) {
            if (err) console.log(err);
            console.log(order)
            res.json(order).status(200)
    })
}

function deleteProduct(req, res) {
    Order.findOne({})
        .then(function(order) {
            order.products.remove(req.body.id);
            order.save(function(err) {
                res.json(order);
            })
        })
}

function addProduct(req, res) {
    Order.findOne({})
        .then(function(order) {
            order.products.push(req.body.id)
            order.save(function(err) {
                res.json(order);
            })
        })
}

module.exports = {
    create,
    index,
    addProduct,
    deleteProduct
}