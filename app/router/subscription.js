import express from 'express';
import subscription from '../model/subscription.js';

const subscriptionRouter = express();

subscriptionRouter.get('/:category', subscription.getSubscription);

export default subscriptionRouter;