import getConnection from "../connection/connection.js";

function getCategory(req, res){

    const connection = getConnection();

    const query = 'SELECT * FROM category';

    connection.query(query, (error, data) => {

        if(error){
            return res.status(500).json(error);
        }
        return res.status(200).json(data);
    })
}

export default {
    getCategory
}