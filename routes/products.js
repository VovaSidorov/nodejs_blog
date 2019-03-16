module.exports = (jsonParser) => {
    const express = require('express');
    const router = express.Router();
    const productsController = require('../controllers/productsController');

    router.get('/', productsController.product_list);
    router.get('/:id', productsController.product_show);
    router.post('/',jsonParser, productsController.product_new);
    router.delete('/:id', productsController.product_delete);
    router.put('/:id',jsonParser, productsController.product_update);

    return router;
};