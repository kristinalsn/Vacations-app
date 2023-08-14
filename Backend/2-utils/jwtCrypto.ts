import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Request } from 'express';
import { UserModel } from '../4-models/UserModel';
 export const secretKey = 'my_secret_key_christina'; 

// Generate a new JWT token
export async function generateNewToken(user: UserModel) {
  return jwt.sign({
      user: {
          'id': user.id,
          'firstName': user.firstName,
          'lastName': user.lastName,
          'email': user.email,
          'role': user.role
      }
  }, secretKey);
}  


// Get Id from token
export async function getIdFromToken(token: string): Promise<number | null> {
    try {
        const verifiedToken = jwt.verify(token, secretKey) as { sub: string };
        const sub = Number(verifiedToken.sub);
        return sub;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// Verify a JWT token
export function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const header = request.header("Authorization");
        if (!header) {
          resolve(false);
          return;
        }
        const token = header.substring(7);
        if (!token) {
          resolve(false);
          return;
        }
        jwt.verify(token, secretKey, (err, decoded) => {
          if (err) {
            resolve(false);
            return;
          }
          if (typeof decoded === 'object' && decoded !== null && 'sub' in decoded) {
            const sub = Number(decoded.sub);
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } catch (err: any) {
        reject(err);
      }
    });
  }  


// Hash a password with a salt

export function hushWithSalt(password: string, salt: string): string {
    console.log('hushWithSalt function called with password:', password, 'and salt:', salt);
    const hush = crypto.createHash("sha256");
    hush.update(password + salt);
    const result = hush.digest("hex");
    console.log('hushWithSalt function returned:', result);
    return result;
}
export default {
    generateNewToken,
    verifyToken,
    hushWithSalt
};
