import express from "express";
import { UserController } from "../controllers/user.controller";

export const publicRoutes = express.Router();

publicRoutes.post('/users/register', UserController.register);
publicRoutes.post('/users/auth', UserController.login);