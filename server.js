const express = require('express');
const path = require('path'); // used to generate abs paths from rel paths
const logger = require('morgan'); // need to npm i morgan
const bodyParser = require('body-parser'); // need to npm i body-parser

const PORT = 3001;
const app = express();

require('dotenv').config();

require('./config/db');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', require('./api/productAPI'));
app.use('/api/order', require('./api/orderAPI'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));