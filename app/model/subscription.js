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

    const userId = req.user.id;

    const connection = connect.getConnection();

    const name = req.body.name;
    const currency = Number(req.body.currency);
    const plan = Number(req.body.plan);
    let startDate = new Date(req.body.startDate)
    let dueDate = new Date(startDate);

    dueDate.setMonth(dueDate.getMonth() + plan);

    startDate = startDate.toISOString().split('T')[0];
    dueDate = dueDate.toISOString().split('T')[0];

    let path = name.toLowerCase();
    
    path = path.replace(/\s/g, '-');

    let image = '/src/assets/subscription_image/'+path+'.png';

    if(path === 'paramount+' || path === 'prime-video'){
        image = '/src/assets/subscription_image/'+path+'.svg';
    }

    let logo = '/src/assets/logos/'+path+'-logo.png';

    if(path === 'netflix'){
        logo = '/src/assets/logos/'+path+'-logo.svg';
    }

    const values = [
        req.body.name,
        path,
        req.body.price,
        req.body.user,
        dueDate,
        startDate,
        plan,
        req.body.paymentMethod,
        currency,
        image,
        logo,
        req.body.categoryId,
        req.body.isCustom,
        userId
    ];


    const query = `INSERT INTO my_subscriptions
    (subscription_name, subscription_path, price, 
    users, due_date, start_date, plan, payment_method, 
    currency_id, image, logo, category_id, is_custom, user_id)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(query, values, (error, data) => {

        if(error){
            return res.status(500).json(error);
        }

        return res.status(200).json(data);
    })
}

export default {
    getSubscription,
    getSubscriptionById,
    addSubscription
}