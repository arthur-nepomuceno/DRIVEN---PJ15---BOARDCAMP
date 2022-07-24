import Joi from "joi";
import connection from "../dbStrategy/postgres.js";

export async function validadePostGame(request, response, next){
    const body = request.body;

    const schema = Joi.object({
        name: Joi.string().trim().required(),
        image: Joi.string().trim().uri().required(),
        stockTotal: Joi.number().positive().required(),
        categoryId: Joi.number().positive().required(),
        pricePerDay: Joi.number().positive().required()
    })

    const validation = schema.validate(body, {abortEarly: false});

    if(validation.error){
        return response.status(406).send(validation.error.details);
    }

    try {
        const nameQuery = `SELECT games.name 
                           FROM games 
                           WHERE name = '${body.name}'`
        
        const categoryQuery = `SELECT *
                               FROM categories 
                               WHERE id = ${body.categoryId}`
        
        const validName = await connection.query(nameQuery);
        const validCategory = await connection.query(categoryQuery);
        
        if(validName.rows.length > 0){
            return response.sendStatus(409);
        }

        if (validCategory.rows.length === 0){
            return response.sendStatus(400);
        }

    } catch(error){
        return response.sendStatus(500);
    }

    next();
}