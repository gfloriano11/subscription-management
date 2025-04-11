import express from 'express';
import cors from 'cors';
import router from '../router/home.js';
import categoryRouter from '../router/category.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', router);
app.use('/category', categoryRouter);

app.listen(8000, () => {
    console.log('server running at http://localhost:8000')
});