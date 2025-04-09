import express from 'express';
import { category } from '../model/category';

const categoryRouter = express.Router();

categoryRouter.get('/', category);

export default categoryRouter;