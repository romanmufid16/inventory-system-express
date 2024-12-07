import { prismaClient } from "../app/database";
import { ResponseError } from "../lib/error.response";
import { CategoryResponse, CreateCategoryRequest, GetCategoryByIdRequest, toCategoryResponse } from "../models/category.model";
import { CategoryValidation } from "../validation/category.validation";
import { Validation } from "../validation/validation";

export class CategoryService {
  static async createCategory(request: CreateCategoryRequest): Promise<CategoryResponse> {
    const categoryRequest = Validation.validate(CategoryValidation.CREATE, request);

    const checkName = await prismaClient.category.count({
      where: {
        name: categoryRequest.name
      }
    });

    if (checkName === 1) {
      throw new ResponseError(400,"Category already exists");
    }

    const category = await prismaClient.category.create({
      data: categoryRequest
    });

    return toCategoryResponse(category);
  }

  static async getCategoryById(request: GetCategoryByIdRequest): Promise<CategoryResponse> {
    const categoryRequest = Validation.validate(CategoryValidation.GET, request);
    const category = await prismaClient.category.findUnique({
      where: {
        id: categoryRequest.id
      }
    });

    if (!category) {
      throw new ResponseError(404, "Category not found");
    }

    return toCategoryResponse(category);
  }
}