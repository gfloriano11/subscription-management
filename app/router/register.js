import express from 'express';
import register from '../model/register.js';

const registerRouter = express.Router();

registerRouter.post('/', register.addUser)