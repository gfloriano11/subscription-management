import connect from "../connection/connection.js";
import bcrypt from 'bcrypt';

function addUser(req, res){

    const userData = req.body;
    let hashPass;

    console.log(userData);

    if(userData.email == '' || userData.password == '' || userData.name == '' || userData.age == '' || userData.salary == '' || userData.gender == ''){
        return res.status(400).send('All fields are required.');
    }

    bcrypt.hash(userData.password, 10, (error, hash) => {
        if(error){
            throw error; 
        }

        hashPass = hash;

        console.log('hashed pass: ', hashPass);
        
        if(userData.password !== ''){
            bcrypt.compare(userData.password, hashPass, (error, result) => {
                console.log('verificando...');
    
    
                if(result){
                    console.log('senha descriptografa: ', userData.password);
                }
    
                if(error){
                    throw error;
                }
            })
        } 

        return res.status(400).send('E-mail e senha são obrigatórios.');

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