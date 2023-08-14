import { NextFunction, Response,Request } from "express";
import { MyCustomRequest } from "../4-models/Request";
import { UserRole } from "../4-models/UserModel";

  


const checkAdmin = (req: MyCustomRequest, res: Response, next: NextFunction): void => {
  const user = req.user;
  if (!user) {
    res.status(401).send('Unauthorized: no user object found');
    return;
  }
  if (user.role !== UserRole.Admin) {
    res.status(401).send('Unauthorized: user is not an admin');
    return;
  }
  next();
};

export { checkAdmin };
