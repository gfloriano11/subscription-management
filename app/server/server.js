import express from 'express';
import cors from 'cors';
import router from '../router/home.js';
import categoryRouter from '../router/category.js';
import subscriptionRouter from '../router/subscription.js';
import mySubscriptionsRouter from '../router/mySubscriptions.js';
import userRouter from '../router/user.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', router);
app.use('/category', categoryRouter);
app.use('/subscription', subscriptionRouter);
app.use('/my-subscriptions', mySubscriptionsRouter)
app.use('/user', userRouter)

app.listen(8000, () => {
    console.log('server running at http://localhost:8000')
});