export enum UserRole {
  Admin, User
}
export interface UserModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role?: UserRole; 
}

