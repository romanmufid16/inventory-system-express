import express from "express";
import { CategoryController } from "../controllers/category.controller";

export const api = express.Router();

api.post('/categories', CategoryController.createCategory);
api.get('/categories/:id', CategoryController.getCategoryById);