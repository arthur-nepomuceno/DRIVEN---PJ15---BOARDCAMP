import connection from "../dbStrategy/postgres.js"

export async function getCategories(request, response){
    try {
        const {rows: categories} = await connection.query(`SELECT * FROM categories`);
        response.send(categories);
    } catch(error){
        response.status(500).send('Server error.');
    }
}

export async function postCategories(request, response){
    const body = request.body;
    try {
        await connection.query(`INSERT INTO categories (name) VALUES ('${body.name}')`);
        return response.sendStatus(201);
    } catch(error){
        return response.status(500).send('Server error.');
    }
}