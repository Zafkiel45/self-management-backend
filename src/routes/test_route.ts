import express from 'express';
import { authCors } from '../middlewares/cors';
export const testRoute = express.Router();

testRoute.use(authCors);

testRoute.get('/', (req, res) => {
    console.log(res.sendStatus(200));
    console.log(req.host);
});