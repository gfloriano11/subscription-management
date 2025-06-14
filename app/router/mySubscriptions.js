import express from 'express';
import mySubscriptions from '../model/mySubscriptions.js';

const mySubscriptionsRouter = express.Router();

mySubscriptionsRouter.get('/', mySubscriptions.getSubscriptions);
mySubscriptionsRouter.get('/:id', mySubscriptions.getSubscriptionById);
mySubscriptionsRouter.put('/:id', mySubscriptions.editSubscriptionById);

export default mySubscriptionsRouter;