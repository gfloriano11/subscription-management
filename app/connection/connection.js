import mysql from 'mysql2';

function getConnection(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'subscription_management'
    });

    return connection;
}

export default getConnection;