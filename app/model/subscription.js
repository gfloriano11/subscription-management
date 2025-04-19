import connect from "../connection/connection.js";

function getSubscription(req, res){

    const connection = connect.getConnection();
    
    const category = req.params.category
    
    const query = `SELECT s.id AS id,
    s.subscription_name,
    s.subscription_path,
    s.image,
    c.id as category_id,
    c.category_name,
    c.category_path
    FROM subscription AS s 
    INNER JOIN category AS c 
    ON s.category_id = c.id 
    WHERE c.category_path = ?`;

    connection.query(query, [category], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

function getSubscriptionById(req, res){
    const connection = connect.getConnection();

    const id = Number(req.params.id);

    const query = 'SELECT * FROM subscription WHERE id = ?';

    connection.query(query, [id], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    })

    connect.endConnection(connection);
}

export default {
    getSubscription,
    getSubscriptionById
}