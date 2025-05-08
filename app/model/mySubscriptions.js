import connect from "../connection/connection.js";

function getSubscriptions(req, res){

    const connection = connect.getConnection();
    
    const query = `SELECT m.id, m.subscription_name, m.subscription_path,
        m.price, m.users, m.due_date, m.start_date, m.payment_method, m.category_id, 
        m.image
        FROM my_subscriptions AS m;`

    connection.query(query, (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

export default {
    getSubscriptions
}