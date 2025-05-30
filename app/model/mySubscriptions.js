import connect from "../connection/connection.js";

function getSubscriptions(req, res){

    const connection = connect.getConnection();
    
    const query = `SELECT m.id, m.subscription_name, m.subscription_path,
        m.price, m.users, m.due_date, m.start_date, m.payment_method, m.currency,
        m.logo, m.image, m.category_id, m.image
        FROM my_subscriptions AS m;`

    connection.query(query, (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

function getSubscriptionById(req, res){

    const id = req.params.id;

    const connection = connect.getConnection();

    const query = `SELECT 
        ms.id, ms.subscription_name, ms.subscription_path, ms.price, 
        ms.payment_method, ms.users, ms.due_date, ms.start_date, ms.is_active, 
        ms.is_custom, ms.notes, ms.image, ms.logo, ct.category_name, cr.symbol
    FROM 
        my_subscriptions AS ms 
    INNER JOIN 
        category AS ct
    ON 
        ms.category_id = ct.id 
    INNER JOIN 
        currency AS cr
    ON ms.currency_id = cr.id
    WHERE 
        ms.id = ?`;

    connection.query(query, [id], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        return res.status(200).json(data);
    })

    connect.endConnection(connection);
}

export default {
    getSubscriptions,
    getSubscriptionById
}