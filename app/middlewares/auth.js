import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const secretKey = process.env.JWT_SECRET

async function authenticateUserToken(req, res, next){
    const token = req.headers['authorization'];
    console.log('authenticating...');
    console.log(token);

    if(!token){
        return res.status(401).json({message: 'Token doesnt exist. Login again.'});
    }

    jwt.verify(token, secretKey, (error, user) => {
        if(error){
            return res.status(403).json({message: 'Invalid token.'});
        }

        req.user = user;
        next();
    })
}

export default authenticateUserToken;