import connect from "../connection/connection";

function addUser(req, res){

    const connection = connect.getConnection();

    const query = `INSERT INTO users`
}