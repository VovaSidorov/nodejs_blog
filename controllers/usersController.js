exports.user_list = (connection) => {
    return (req, res) => {

        const {query} = req;
        let limitRows = 4;
        let offset = 0;
        let page = 1;

        console.log(query);
        if("page" in query && Number.isInteger(parseInt(query.page)) && parseInt(query.page) > 0){
            page = parseInt(query.page);
            offset = limitRows*(page - 1);
        }


        const query1 = `select * from users LIMIT ${limitRows} OFFSET ${offset};`;
        const query2 = `select count(*) as count from users;`;



        connection.query(`${query1} ${query2}`, (err, result) => {
            if(err){}
            console.log(result);
            res.send({
                data: result[0],
                page: page,
                total: result[1][0].count,
                status: "ok"
            });
        })
    }
};

exports.user_show = (connection) => {
    return (req, res) => {

        const {params: {id}} = req;
        console.log(id);

        if(Number.isInteger(parseInt(id)) && parseInt(id) > 0){
            const query1 = `select * from users WHERE id = ${id};`;
            connection.query(query1, (err, result) => {
                if(err){}
                console.log(result);
                res.send({
                    data: result,
                    status: "ok"
                });
            })
        }else {
            res.send({
                status: "error",
                error: "Error get data"
            });
        }
    };
};
