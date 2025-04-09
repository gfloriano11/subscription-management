import express from 'express';
import home from '../model/home.js';

const router = express.Router();

router.get('/', home);

export default router;