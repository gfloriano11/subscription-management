import connect from "../connection/connection.js";
import bcrypt, { hash } from 'bcrypt';

function addUser(req, res){

    const userData = req.body;
    let hashPass;

    bcrypt.hash(userData.password, 10, (error, hash) => {
        if(error){
            throw error; 
        }

        hashPass = hash;

        console.log('hashed pass: ', hashPass);

        bcrypt.compare(userData.password, hashPass, (error, result) => {
            console.log('verificando...');
            if(result){
                console.log('senha correta: ', userData.password);
            }
        })
    });

    

    const connection = connect.getConnection();

    const query = `INSERT INTO users
    (fullname, email, password_hash, salary, age)
    VALUES
    (?, ?, ?, ?, ?)`;
}

export default {
    addUser
}