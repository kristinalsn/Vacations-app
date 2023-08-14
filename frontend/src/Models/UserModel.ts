// export enum UserRole {
//   Admin, User
// }
export enum UserRole {
  Admin = "admin",
  User = "user",
  Default = "user"
}
export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: UserRole ;
  }

  export const firstNameValidation = {
    required: { value: true, message: "First name is required" },
    minLength: { value: 2, message: "First name must be at least 2 characters" },
    maxLength: { value: 50, message: "First name cannot exceed 50 characters" },
  };
  
  export const lastNameValidation = {
    required: { value: true, message: "Last name is required" },
    minLength: { value: 2, message: "Last name must be at least 2 characters" },
    maxLength: { value: 50, message: "Last name cannot exceed 50 characters" },
  };
  
  export const emailValidation = {
    required: { value: true, message: "Email is required" },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address",
    },
  };
  
  export const passwordValidation = {
    required: { value: true, message: "Password is required" },
    minLength: { value: 6, message: "Password must be at least 6 characters" },
    maxLength: { value: 50, message: "Password cannot exceed 50 characters" },
  };
  