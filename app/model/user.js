import { data } from "react-router-dom";
import connect from "../connection/connection.js";
import bcrypt from 'bcrypt';

async function register(req, res){

    const userData = req.body;

    if(userData.email == '' || userData.password == '' || userData.name == '' || userData.age == '' || userData.salary == '' || userData.gender == ''){
        return res.status(400).send('All fields are required.');
    }
    
    const hashPass = await bcrypt.hash(userData.password, 10);
    
    const values = [
        userData.name,
        userData.email,
        hashPass,
        userData.salary,
        userData.age,
        userData.gender
    ];

    const connection = connect.getConnection();
    
    const query = `INSERT INTO users
    (fullname, email, password_hash, salary, age, gender)
    VALUES
    (?, ?, ?, ?, ?, ?)`;

    connection.query(query, values, (error, data) => {

        connect.endConnection(connection);

        if(error){
            return res.status(500).json(error);
        }

        return res.status(200).json(data);
    })
}

async function login(req, res){

    const userData = req.body;

    const connection = connect.getConnection();

    if(userData.email == '' || userData.password == ''){
        return res.status(500).send('All fields required.');
    }

    const query = `SELECT * FROM users WHERE email = ?`;
    
    connection.query(query, userData.email, (error, data) => {

        connect.endConnection(connection);

        console.log(data);

        // if(error){
        //     return res.status(500).json(error);
        // }

        // return res.status(200).json(data);
    })

}

export default {
    register,
    login
}