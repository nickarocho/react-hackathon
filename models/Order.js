const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema ({
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Order', orderSchema);