import { setBasicCorsConfiguration } from "../middlewares/cors";
import { controllerRegister } from "../controllers/user.controller";
import express from 'express';

export const register = express.Router();

register.use(setBasicCorsConfiguration);

register.post('/', controllerRegister);