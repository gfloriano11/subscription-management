import express from 'express';
import user from '../model/user.js';
import authenticate from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', user.register);
userRouter.post('/login', user.login);
userRouter.get('/:id', authenticate, user.getUserData);

export default userRouter;