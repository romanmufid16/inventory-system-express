import { NextFunction, Request, Response } from "express";
import { CreateCategoryRequest, GetCategoryByIdRequest } from "../models/category.model";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  static async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateCategoryRequest = req.body;
      const result = await CategoryService.createCategory(request);
      res.status(201).json({
        success: true,
        message: "Category created successfully",
        result
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const request: GetCategoryByIdRequest = {
        id: Number(req.params.id)
      }
      const result = await CategoryService.getCategoryById(request);
      res.status(200).json({
        success: true,
        message: "Category retrieved successfully",
        result
      });
    } catch (error) {
      next(error);
    }
  }
}