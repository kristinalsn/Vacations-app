import { verifyToken } from "../2-utils/jwtCrypto";
import { UserModel, UserRole } from "../4-models/UserModel";
import { Request } from "express";
import jwt from "jsonwebtoken";
   
// Verify if user is Admin
 export async function verifyAdmin(request: Request): Promise<boolean> {
    const isLoggedIn = await verifyToken(request);

    if (!isLoggedIn) return false;

    const header = request.header("Authorization");
    const token = header.substring(7);

    const container: any = jwt.decode(token);

    const user: UserModel = container.user;

    return user.role === UserRole.Admin;

}

      