import { User } from "@prisma/client";
import { Request } from "express";

export type UserResponse = {
  name: string;
  username: string;
  role: string;
}

export type RegisterRequest = {
  name: string;
  username: string;
  password: string;
}

export type LoginRequest = {
  username: string;
  password: string;
}

export type LoginResponse = {
  token: string;
}

export function toUserResponse(user: User): UserResponse {
  return {
    name: user.name,
    username: user.username,
    role: user.role,
  }
}

export interface UserRequest extends Request {
  user?: User;
}