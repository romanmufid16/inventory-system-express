import { z, ZodType } from "zod";

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    name: z.string().min(1).max(100),
    username: z.string().min(4, { message: "At least 4 characters" }),
    password: z.string().min(6, { message: "At least 6 characters" }).max(100),
  });

  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(4, { message: "At least 4 characters" }),
    password: z.string().min(6, { message: "At least 6 characters" }).max(100),
  });
}
