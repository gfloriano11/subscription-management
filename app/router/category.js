import express from 'express';
import category from '../model/category.js';

const categoryRouter = express.Router();

categoryRouter.get('/', category.getCategory);

export default categoryRouter;