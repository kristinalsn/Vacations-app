import axios from "axios";
import { store } from "../App/store";
import CredentialsModel from "../Models/CredentialsModel";
import { UserModel, UserRole } from "../Models/UserModel";
import { appConfig } from "../Utils/Config";

class AuthService {

    // Register  user: 
    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        store.dispatch({ type: 'auth/login', payload: token });
    }

    // Login  user: 
    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token = response.data;
        store.dispatch({ type: 'auth/login', payload: token });
    }

    // Logout :
    public logout(): void {
        store.dispatch({ type: 'auth/logout' });
    }
    public isUserAdmin(): boolean {
        return store.getState().auth?.role === UserRole.Admin;
      }
      

}


const authService = new AuthService();

export default authService;
