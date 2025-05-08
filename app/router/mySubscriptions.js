import express from 'express';
import mySubscriptions from '../model/mySubscriptions.js';

const mySubscriptionsRouter = express.Router();

mySubscriptionsRouter.get('/', mySubscriptions.getSubscriptions);

export default mySubscriptionsRouter;