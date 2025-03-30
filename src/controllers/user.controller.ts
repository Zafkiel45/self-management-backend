import { db } from "../database/connection";
import { registerUser } from "../services/user.services";

import type { Request, Response } from "express";
import type { authUser } from "../models/user.models";
import { generateWebToken } from "../utils/generate_jwt";

interface lastQueryInserted {
  lastInsertRowid: number;
  changes: number;
}

export const controllerRegister = async (req: Request, res: Response) => {
  try {
    const { user, password } = req.body as authUser;

    if (!user || !password) {
      res.sendStatus(400); // bad request
    } else {
      const getUser = db.query("SELECT name FROM users WHERE name = @user");
      const conflictUser = getUser.get({ user: user });

      getUser.finalize();

      if (conflictUser) {
        res.sendStatus(409); // conflict status
      } else {
        const queryMetadata: lastQueryInserted = await registerUser(
          user,
          password
        );

        const payload = JSON.stringify({ user: queryMetadata });
        res.setHeader(
          "Set-cookie",
          `payload=${await generateWebToken(
            payload
          )}; HttpOnly; SameSite=None; Secure; Path=/`
        );
        res.sendStatus(200); // ok
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const checkLogin = (req: Request, res: Response) => {
  try {
    const { cookies } = req;
    console.log(cookies);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
