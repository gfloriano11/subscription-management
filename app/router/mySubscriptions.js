import express from 'express';
import mySubscriptions from '../model/mySubscriptions.js';
import authenticate from '../middlewares/auth.js';

const mySubscriptionsRouter = express.Router();

mySubscriptionsRouter.get('/', authenticate, mySubscriptions.getSubscriptionsByUserId);
mySubscriptionsRouter.get('/:id', authenticate, mySubscriptions.getSubscriptionById);
mySubscriptionsRouter.put('/:id', authenticate, mySubscriptions.editSubscriptionById);
mySubscriptionsRouter.delete('/:id', authenticate, mySubscriptions.deleteSubscriptionById);

export default mySubscriptionsRouter;