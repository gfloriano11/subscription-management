import mysql from 'mysql2';

function getConnection(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'subscription_management'
    });

    return connection;
};

function endConnection(connection){
    connection.end((error) => {
        if(error){
            throw new Error('Can not end connection :(');
        }

        console.log('Connection ended succesfully');
    })
}

export default {
    getConnection,
    endConnection
};