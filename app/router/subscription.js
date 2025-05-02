import express from 'express';
import subscription from '../model/subscription.js';

const subscriptionRouter = express();

subscriptionRouter.get('/:category', subscription.getSubscription);
subscriptionRouter.get('/id/:id', subscription.getSubscriptionById);

subscriptionRouter.post('/add/subscription', subscription.addSubscription);

export default subscriptionRouter;