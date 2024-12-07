import { z, ZodType } from "zod";

export class CategoryValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string({message: "Name must be string"}).min(1, "Field is required").max(100,"Maximum characters 100")
  });

  static readonly GET: ZodType = z.object({
    id: z.number().min(1, "Id is required")
  });
}