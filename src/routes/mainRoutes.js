const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/prodCart', mainController.productCart);

router.get('/prodDetail', mainController.productDetail);

router.get('/register', mainController.register);

module.exports = router;