import express from 'express';
import mySubscriptions from '../model/mySubscriptions.js';
import authenticate from '../middlewares/auth.js';

const mySubscriptionsRouter = express.Router();

mySubscriptionsRouter.get('/', authenticate, mySubscriptions.getSubscriptions);
mySubscriptionsRouter.get('/:id',  mySubscriptions.getSubscriptionById);
mySubscriptionsRouter.put('/:id', mySubscriptions.editSubscriptionById);
mySubscriptionsRouter.delete('/:id', mySubscriptions.deleteSubscriptionById);

export default mySubscriptionsRouter;