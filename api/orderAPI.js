const express = require('express');
const router = express.Router();
const orderController = require('./../controllers/orderController');

router.post('/checkout', orderController.create);
router.get('/checkout', orderController.index);

module.exports = router;