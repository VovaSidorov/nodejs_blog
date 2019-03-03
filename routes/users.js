module.exports = (jsonParser) => {
    const express = require('express');
    const router = express.Router();
    const usersController = require('../controllers/usersController');

    router.get('/', usersController.user_list);
    router.get('/:id', usersController.user_show);
    router.post('/',jsonParser, usersController.user_new);

    return router;
};