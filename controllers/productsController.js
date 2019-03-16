const Product = require('../models').Product;

exports.product_list = (req, res) => {
    const {query} = req;
    let limitRows = 4;
    let offset = 0;
    let page = 1;

    if("page" in query && Number.isInteger(parseInt(query.page)) && parseInt(query.page) > 0){
        page = parseInt(query.page);
        offset = limitRows*(page - 1);
    }

    Product.findAndCountAll({ offset: offset, limit: limitRows })
        .then(users => {
            res.json({
                data: users,
                page: page,
                status: "ok"
            })
        })
};

exports.product_show = (req, res) => {
    const {params: {id}} = req;
    console.log(id);

    Product.findById(id)
        .then(user => {
            console.log(user);
            res.json({
                data: user,
                status: "ok"
            });
        })
};

exports.product_update = (req, res) => {
    const {params: {id}} = req;
    console.log(id);

    Product.findOne({ where: { id: id } })
        .then(user => {
            console.log('\x1b[31m',user);
            user.update({...req.body})
                .then(result => {
                    console.log(result);
                    res.json({
                        data: result,
                        status: "ok"
                    });
                })
        })
};

exports.product_delete = (req, res) => {
    const {params: {id}} = req;
    console.log(id);

    Product.destroy({
        where: {
            id: id
        }
    })
        .then(result => {
            console.log(result);
            res.json({
                data: result,
                status: "ok"
            });
        })
};

exports.product_new = (req, res) => {
    console.log(req.body);

    Product.create({...req.body})
        .then(user => {
            console.log(user);
            res.json({
                data: user,
                status: "ok"
            });
        })
};