import Joi from "joi";
import connection from "../dbStrategy/postgres.js";

export async function validatePostCustomer(request, response, next){
    const body = request.body;
    const {cpf} = body;

    const schema = Joi.object({name: Joi.string().trim().required(),
                               phone: Joi.string().trim().pattern(new RegExp(/^[0-9]{10,11}$/)).required(),
                               cpf: Joi.string().trim().pattern(new RegExp(/[0-9]{11}/)).required(),
                               birthday: Joi.date().iso().min('1930-01-01').max('2006-12-31').required()
                               })
    const validation = schema.validate(body, {abortEarly: false});
    if(validation.error){
        return response.status(400).send(validation.error.details)
    }
    
    try {
        const cpfQuery = `SELECT * FROM customers WHERE cpf = '${cpf}';`
        const customerData = await connection.query(cpfQuery);
        if(customerData.rows.length > 0){
            return response.sendStatus(409);
        }     
    } catch(error){
        return response.sendStatus(500);
    }

    next();
}

export async function validateGetCostumerById(request, response, next){
    const { id } = request.params;
    try{
        const query = `SELECT * FROM customers WHERE id = $1`
        const {rows: validId} = await connection.query(query, [`${id}`])
        if(validId.length === 0){
            return response.sendStatus(404);
        }
    }catch(error){
        return response.sendStatus(500)
    }
    next();
}

export async function validatePutCostumerById(request, response, next){
    const body = request.body;
    const { id } = request.params;

    const schema = Joi.object({name: Joi.string().trim().required(),
                               phone: Joi.string().trim().pattern(new RegExp(/^[0-9]{10,11}$/)).required(),
                               cpf: Joi.string().trim().pattern(new RegExp(/[0-9]{11}/)).required(),
                               birthday: Joi.date().iso().min('1930-01-01').max('2006-12-31').required()
                               })
    const validation = schema.validate(body, {abortEarly: false});
    if(validation.error){
    return response.status(400).send(validation.error.details)
    }

    try{
        const query = `SELECT * FROM customers WHERE id = $1`
        const {rows: validId} = await connection.query(query, [`${id}`])
        if(validId.length === 0){
            return response.sendStatus(404);
        }
    }catch(error){
        return response.sendStatus(500)
    }
    next();
}