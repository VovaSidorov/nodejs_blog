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
            res.json({
                data: data,
                status: "ok"
            });
        });
};

exports.cart_add_item = (req, res) => {
    console.log(req.body);

    Cart.create({...req.body})
        .then(data => {
            console.log(data);
            res.json({
                data: data,
                status: "ok"
            });
        })
};