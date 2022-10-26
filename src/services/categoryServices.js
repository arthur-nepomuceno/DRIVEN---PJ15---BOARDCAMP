import { database } from "../db/postgres.js"

//checks if name is available
export async function checkName(name) {

    const record = await database.query(`SELECT name FROM categories WHERE name = $1`, [name])

    if(record) throw {
        type: 'invalid_name',
        status: 409,
        message: 'The category you are trying to create already exists.'
    };

    return;
}