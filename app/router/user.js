import express from 'express';
import user from '../model/user.js';

const userRouter = express.Router();

userRouter.post('/', user.register);

export default userRouter;