import joi from "joi";
import connection from "../dbStrategy/postgres.js";

export async function validadePostCategory(request, response, next){
    const body = request.body;
    
    const schema = joi.object({name: joi.string().required()})
    const validation = schema.validate(body, {abortEarly: false});
    if(validation.error){
        return response.status(400).send(validation.error.details);
    }
    
    try {        
        const {rows: categories} = await connection.query(`SELECT * FROM categories`);
        let sameName = false;
        for (let category of categories){
            if(category.name === body.name){
                sameName = true;
            }
        }        
        if(sameName){
            return response.sendStatus(409)
        }     
    } catch(error){
        return response.sendStatus(500);
    }

    next();
}