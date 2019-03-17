const Cart = require('../models').Cart;
const Product = require('../models').Product;


exports.cart_show = (req, res) => {
    const {params: {user_id}} = req;

    Cart.findAll({
        where:{
            user_id: user_id
        },
        // include: [{
        //     model: Product,
        // }]
    })
        .then(tasks => {
            console.log(JSON.stringify(tasks))
        });
};