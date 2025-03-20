import type { Request, Response, NextFunction } from "express";

export function setBasicCorsConfiguration(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTION');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if(req.method === "OPTION") {
        res.sendStatus(204);
    };

    next();
};