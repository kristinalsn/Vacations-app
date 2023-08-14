// import Joi from "joi"

import { UploadedFile } from "express-fileupload";
import Joi from "joi";

export interface VacationModel{
    id:number,
    destination:string,
    description:string,
    startDate:string,
    endDate:string,
    price:number,
    imageName?:string
     image?: UploadedFile;
}

// export const VacationsSchema = Joi.object({
//     id: Joi.number().optional().positive().integer(),
//     destination: Joi.string().required().min(2).max(70),
//     description: Joi.string().required().min(10).max(500),
//     startDate: Joi.string().required().min(2).max(20),
//     endDate: Joi.string().required().min(2).max(20),
//     price: Joi.number().required().min(100).max(10000),
//     imageName: Joi.string().optional(),

// })

