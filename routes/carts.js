module.exports = (jsonParser) => {
    const express = require('express');
    const router = express.Router();
    const cartsController = require('../controllers/cartsController');

    router.get('/:user_id', cartsController.cart_show);
    router.post('/:user_id', jsonParser, cartsController.cart_add_item);


    return router;
};