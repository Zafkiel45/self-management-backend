import express from 'express';
import { setBasicCorsConfiguration } from '../middlewares/cors';
export const testRoute = express.Router();

testRoute.use(setBasicCorsConfiguration);

testRoute.get('/', (req, res) => {
    console.log(res.sendStatus(200));
    console.log(req.host);
});