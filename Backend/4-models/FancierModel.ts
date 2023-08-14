import Joi, { ValidationResult } from "joi";

export interface FancierModel {
    userId: number ;
    vacationId: string;
    
  }

  export function validateUser(user: FancierModel): ValidationResult {
    const schema = Joi.object({
      userId: Joi.number().required().integer(),
      vacationId: Joi.number().required().integer(),
  });
   
    return schema.validate(user);
   }

  