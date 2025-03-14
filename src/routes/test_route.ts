import express from 'express';
export const testRoute = express.Router();

testRoute.get('/', (req, res) => {
    console.log(res.sendStatus(200));
    console.log(req.host);
});