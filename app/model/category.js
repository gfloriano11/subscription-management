import getConnection from "../connection/connection";

function getCategory(){

    const connection = getConnection();

    const query = 'SELECT * FROM category';

    connection.query(query, (error, data) => {

        if(error){
            return res.json(error);
        }
        return res.status(200).json(data);
    })
}

export default getCategory;