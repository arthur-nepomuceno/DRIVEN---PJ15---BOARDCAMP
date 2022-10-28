import Joi from "joi";

export const customerSchema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string().trim().required(),
    phone: Joi.string().required().pattern(/^[0-9]{10,11}$/).message('-phone must have between 10 and 11 digits-'),
    cpf: Joi.string().required().pattern(/^[0-9]{11}$/).message('-CPF must have 11 digits-'),
    birthday: Joi.string().required().pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/).message('-birhtday must follow the format yyyy-mm-dd-')
})