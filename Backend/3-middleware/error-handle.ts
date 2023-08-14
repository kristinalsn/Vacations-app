import { NextFunction , Request, Response } from "express";
import { send } from "process";


// Catch all errors middleware 
function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    console.log(err);

    const status = err.status || 500;

    if (status === 500) {

        send("catchAll error", err);

    }

    const message =  status !== 500 ? err.message : "Some error occurred, please try again.";

    response.status(status).send(message);
}

export default catchAll;