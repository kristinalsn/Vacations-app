import { Request } from "express";
import { UserModel } from "./UserModel";

export interface MyCustomRequest extends Request {
    user?: UserModel;
  }    