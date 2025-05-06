import { data } from "react-router-dom";
import connect from "../connection/connection.js";

function getSubscription(req, res){

    const connection = connect.getConnection();
    
    const category = req.params.category
    
    const query = `SELECT s.id AS id,
    s.subscription_name,
    s.subscription_path,
    s.image,
    c.id as category_id,
    c.category_name,
    c.category_path
    FROM subscription AS s 
    INNER JOIN category AS c 
    ON s.category_id = c.id 
    WHERE c.category_path = ?`;

    connection.query(query, [category], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

function getSubscriptionById(req, res){
    const connection = connect.getConnection();

    const id = Number(req.params.id);

    const query = 'SELECT * FROM subscription WHERE id = ?';

    connection.query(query, [id], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    })

    connect.endConnection(connection);
}

function addSubscription(req, res){
    const connection = connect.getConnection();

    console.log(req.body);

    const name = req.body.subscriptionData.name;
    const price = req.body.subscriptionData.price;
    const user = req.body.subscriptionData.user;
    const dueDate = req.body.subscriptionData.dueDate;
    const startDate = req.body.subscriptionData.startDate;
    const paymentMethod = req.body.subscriptionData.paymentMethod;
    const categoryId = req.body.subscriptionData.categoryId;
    const isCustom = req.body.subscriptionData.isCustom;

    let path = name.toLowerCase();

    path = path.replace(/\s/g, '-');

    const query = `INSERT INTO my_subscriptions
    (subscription_name, subscription_path, price, 
    users, due_date, start_date, payment_method, category_id, is_custom)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(query, [name, path, price, user, dueDate, startDate, paymentMethod, categoryId, isCustom], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        console.log("Added subscription with success!");
        return res.status(200).json(data);
    })
}

export default {
    getSubscription,
    getSubscriptionById,
    addSubscription
}