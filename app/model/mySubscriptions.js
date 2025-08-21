import { useEffect } from "react";
import connect from "../connection/connection.js";

function getSubscriptionsByUserId(req, res){

    const userId = req.user.id;

    const connection = connect.getConnection();
    
    const query = `SELECT 
        ms.id, ms.subscription_name, ms.subscription_path, ms.price, 
        ms.payment_method, ms.users, ms.due_date, ms.start_date, ms.is_active, 
        ms.is_custom, ms.notes, ms.image, ms.logo, ct.category_name, cr.symbol
    FROM 
        my_subscriptions AS ms 
    INNER JOIN 
        category AS ct
    ON 
        ms.category_id = ct.id 
    INNER JOIN 
        currency AS cr
    ON ms.currency_id = cr.id
    WHERE
        user_id = ?`;

    connection.query(query, userId, (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });

    connect.endConnection(connection);
}

function getSubscriptionById(req, res){

    const id = req.params.id;

    const connection = connect.getConnection();

    const query = `SELECT 
        ms.id, ms.subscription_name, ms.subscription_path, ms.price, 
        ms.payment_method, ms.users, ms.due_date, ms.start_date, ms.is_active, 
        ms.plan, ms.is_custom, ms.notes, ms.image, ms.logo, ct.category_name, cr.symbol
    FROM 
        my_subscriptions AS ms 
    INNER JOIN 
        category AS ct
    ON 
        ms.category_id = ct.id 
    INNER JOIN 
        currency AS cr
    ON ms.currency_id = cr.id
    WHERE 
        ms.id = ?`;

    connection.query(query, [id], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        if(data[0].plan === 12){
            data[0].plan = '1 Year'
        }

        if(data[0].plan === 6){
            data[0].plan = '6 Months'
        }

        if(data[0].plan === 3){
            data[0].plan = '3 Months'
        }

        if(data[0].plan === 1){
            data[0].plan = '1 Month'
        }

        let start_date = new Date(data[0].start_date).toISOString().split('T')[0];
        let due_date = new Date(data[0].due_date).toISOString().split('T')[0];

        data[0].start_date = start_date
        data[0].due_date = due_date

        data[0].start_date = data[0].start_date.replace(/-/g, '/');
        data[0].due_date = data[0].due_date.replace(/-/g, '/');

        const language = 'portuguese';

        if(language === 'portuguese'){
            let [year, month, day] = start_date.split('-');
            start_date = `${day}/${month}/${year}`;
            [year, month, day] = due_date.split('-');
            due_date = `${day}/${month}/${year}`;

            data[0].start_date = start_date;
            data[0].due_date = due_date;
        }


        return res.status(200).json(data);
    })

    connect.endConnection(connection);
}

function editSubscriptionById(req, res){

    
    const subscription = req.body.subscription;
    const connection = connect.getConnection();

    const plan = subscription.plan.split(' ');

    subscription.currency_id = 2;

    if(subscription.symbol === 'R$'){
        subscription.currency_id = 1;
    }

    if(subscription.subscription_name == 'Netflix' || subscription.subscription_name == 'Disney+' || subscription.subscription_name == 'Paramount+' || subscription.subscription_name == 'Prime Video' || subscription.subscription_name == 'Max' || subscription.subscription_name == 'Crunchyroll'){
        subscription.category_id = 1;
    }

    let dueDate = subscription.due_date.split('/');
    const day = dueDate[0];
    const month = dueDate[1];
    const year = dueDate[2];
    subscription.due_date = `${year}-${month}-${day}`;

    const values = [
        subscription.subscription_name,
        subscription.subscription_path,
        subscription.price,
        subscription.payment_method,
        subscription.users,
        subscription.due_date,
        subscription.start_date,
        plan[0],
        subscription.is_active,
        subscription.is_custom,
        subscription.notes,
        subscription.image,
        subscription.logo,
        subscription.category_id,
        subscription.currency_id,
        subscription.id
    ]

    const query = `UPDATE my_subscriptions
    SET 
        subscription_name = ?,
        subscription_path = ?,
        price = ?,
        payment_method = ?,
        users = ?,
        due_date = ?,
        start_date = ?,
        plan = ?,
        is_active = ?,
        is_custom = ?,
        notes = ?,
        image = ?,
        logo = ?,
        category_id = ?,
        currency_id = ?
    WHERE
        id = ?`

    connection.query(query, values, (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });


    connect.endConnection(connection);
}

function deleteSubscriptionById(req, res){

    const id = req.params.id;

    const connection = connect.getConnection();

    const query = `
    DELETE FROM
        my_subscriptions
    WHERE
        id = ?`;

    connection.query(query, [id], (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    });
}

export default {
    getSubscriptionsByUserId,
    getSubscriptionById,
    editSubscriptionById,
    deleteSubscriptionById
}