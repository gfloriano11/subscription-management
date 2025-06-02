import { useEffect } from "react";
import connect from "../connection/connection.js";
import subscription from "./subscription.js";

function getSubscriptions(req, res){

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
    ON ms.currency_id = cr.id`;

    connection.query(query, (error, data) => {

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

export default {
    getSubscriptions,
    getSubscriptionById
}