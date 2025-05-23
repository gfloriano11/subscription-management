import express from 'express';
import mySubscriptions from '../model/mySubscriptions.js';

const mySubscriptionsRouter = express.Router();

mySubscriptionsRouter.get('/', mySubscriptions.getSubscriptions);
mySubscriptionsRouter.get('/:id', mySubscriptions.getSubscriptionById);

export default mySubscriptionsRouter;