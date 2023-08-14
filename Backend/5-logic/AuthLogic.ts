import { OkPacket } from "mysql2";
import { execute } from "../2-utils/dal";
import  { hushWithSalt } from "../2-utils/jwtCrypto";
import { UserModel, UserRole } from "../4-models/UserModel";

// Get All Users
export async function getAllUsers() {
    const query = 'SELECT * FROM users'
    const [results] = await execute(query)
    return results
}

export async function register(user: UserModel) {
    const { firstName, lastName, email, password } = user;
    const salt = "iLoveVacations";

    // Check if email is already in use
    const emailExistQuery = `SELECT * FROM users WHERE email = ?`
    const [emailResults] = await execute<OkPacket>(emailExistQuery, [email]);
    if (emailResults.length > 0) {
        return 'Email is already in use';
    } else {
        // Insert the new user into the database
        const query = 'INSERT INTO users(firstName,lastName,email,password,role) VALUES(?,?,?,?,?)'
        const [results] = await execute<OkPacket>(query, [firstName, lastName, email, hushWithSalt(password, salt), UserRole.User]);
        user.id = results.insertId;

        return results;
    }
}

//Get One  user by Id
export async function getUserById(id: number) {
    const query = 'SELECT * FROM users WHERE id = ?'
    const [results] = await execute<OkPacket>(query, [id]);
    return results;
}

//Login the user 
export async function login(email: string, password: string) {
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?'
    const salt = "iLoveVacations";
    const [results] = await execute<UserModel[]>(query, [email, hushWithSalt(password, salt)])
    return results[0];
 }
 




