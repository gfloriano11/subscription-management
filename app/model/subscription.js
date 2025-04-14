import connect from "../connection/connection.js";

function getSubscription(req, res){

    const connection = connect.getConnection();
    
    const category = req.params.category
    
    const query = `SELECT * FROM subscription AS s 
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

export default {
    getSubscription
}