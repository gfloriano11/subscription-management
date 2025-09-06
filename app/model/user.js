import connect from "../connection/connection.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = process.env.JWT_SECRET;

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

        if(!data[0]){
            return res.status(401).json({success: false, message: 'invalid e-mail or password'});
        }

        const user = data[0];

        bcrypt.compare(userData.password, user.password_hash, (error, result) => {

            if(error){

                return res.status(500).json(error);
            }

            if(result){

                const token = jwt.sign({ id: user.id, name: user.fullname, email: user.email }, secretKey, { expiresIn: '1h' });

                res.status(201).json({ success: true, message: token });

            } else {
                return res.status(401).json({success: false, message: 'invalid e-mail or password'})
            }

        })
    })

}

async function getUserData(req, res){

    const id = req.user.id;

    const connection = connect.getConnection();

    const query = `SELECT fullname, email, salary, age WHERE id = ?`;

    connection.query(query, id, (error, data) => {
        if(error){

            return res.status(500).json(error);
        }

        return res.status(200).json(data);
    })
    
}

export default {
    register,
    login
}