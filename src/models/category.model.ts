import { Category } from "@prisma/client";

export type CategoryResponse = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCategoryRequest = {
  name: string;
}

export type GetCategoryByIdRequest = {
  id: number;
}

export function toCategoryResponse(category: Category) {
  return {
    id: category.id,
    name: category.name,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
  }
}