module.exports = (connection) => {
    const express = require('express');
    const router = express.Router();
    const usersController = require('../controllers/usersController');

    router.get('/', usersController.user_list(connection));
    router.get('/:id', usersController.user_show(connection));

    return router;
}