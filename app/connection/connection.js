import mysql from 'mysql2';

function getConnection(){
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'subscription_management'
    });
}

export default getConnection;