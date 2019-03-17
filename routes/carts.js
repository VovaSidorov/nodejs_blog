module.exports = (jsonParser) => {
    const express = require('express');
    const router = express.Router();
    const cartsController = require('../controllers/cartsController');

    router.get('/:user_id', cartsController.cart_show);

    return router;
};