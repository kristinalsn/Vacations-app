import express from "express";
import { generateNewToken, hushWithSalt } from "../2-utils/jwtCrypto";
import { BadCredentialsError } from "../4-models/Errors/BadCredentials";
import { MyCustomRequest } from "../4-models/Request";
import { UserModel, UserRole } from "../4-models/UserModel";
import { register, getAllUsers, getUserById, login } from "../5-logic/authLogic";


export const UserRoute = express.Router();

UserRoute.get('/users', async (req, res, next) => {
    const response = await getAllUsers();
    res.json(response);

})
UserRoute.get('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    const response = await getUserById(+id);
    res.json(response);
})


UserRoute.post('/register', async (req, res) => {
    const user: UserModel = { ...req.body, role: UserRole.User };
    try {
        const response = await register(user);
        if (response.length > 0) {
            res.status(404).json(response);
            return;
        }
        const token = await generateNewToken(user);
        res.status(200).json(token);

    } catch (e) {
        res.status(400).json(e);
    }
})


UserRoute.post('/login',  async (req: MyCustomRequest, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await login(email, password);
    console.log(user);
    if (!user) {
      next(new BadCredentialsError());
      return;
    }
    const token = await generateNewToken(user);
    res.status(201).send(token);
    console.log(token)
  });
