import { db } from "../database/connection";
import { registerUser } from "../services/user.services";

import type { Request, Response } from "express"
import type { authUser } from "../models/user.models";


export const controllerRegister = (req: Request, res: Response) => {
    try {
        const { user, password } = req.body as authUser;
        
        if(!user || !password) {
            res.sendStatus(400) // bad request
        } else {
            const getUser = db.query('SELECT name FROM users WHERE name = @user');
            const conflictUser = getUser.get({user: user});
    
            getUser.finalize(); 
    
            if(conflictUser) {
                res.sendStatus(409); // conflict status
            } else {
                registerUser(user, password);
            };
        };
    } catch (err) {
        console.error(err);
    }
};