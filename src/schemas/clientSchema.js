import Joi from "joi";

export const clientSchema = Joi.object({
    name: Joi.string().trim().required(),
    phone: Joi.number().min(11).max(14).required(),
    cpf: Joi.number().min(11).max(11).required(),
    birthday: Joi.date().required()
})