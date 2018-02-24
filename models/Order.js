const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema ({
    product: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Order', orderSchema);