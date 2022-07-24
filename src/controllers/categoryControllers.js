import connection from "../dbStrategy/postgres.js"

export async function getCategories(request, response){
    try {
        const query = `SELECT * FROM categories;`;
        const {rows: categories} = await connection.query(query);
        response.send(categories);
    } catch(error){
        response.status(500).send('Server error.');
    }
}

export async function postCategories(request, response){
    const body = request.body;
    try {
        const query = `INSERT INTO categories (name) VALUES ('${body.name}');`;
        await connection.query(query);
        return response.sendStatus(201);
    } catch(error){
        return response.status(500).send('Server error.');
    }
}