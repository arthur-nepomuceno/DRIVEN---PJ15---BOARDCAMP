import { database } from "../db/postgres.js"

//finds the game on the database, if exists.
export async function findGameName(name) {
    return await database.query(`SELECT * FROM games WHERE name = $1`, [name]);
}

//register the new game on the database.
export async function createGame(body) {
    const {name, image, stockTotal, categoryId, pricePerDay} = body;

    const query = `INSERT INTO games(name, image, "stockTotal", "categoryId", "pricePerDay")
                   VALUES ($1, $2, $3, $4, $5)`;
    
    const params = [name, image, stockTotal, categoryId, pricePerDay];
    return await database.query(query, params)
}

//gets the list of games from the database.
export async function readGames(name) {
    if(name){
        const query = `
            SELECT 
                games.id, 
                games.name, 
                games.image, 
                games."stockTotal", 
                games."categoryId",
                games."pricePerDay",
                categories.name as "categoryName"
            FROM games
            JOIN categories
            ON categories.id = games."categoryId"
            WHERE LOWER(games.name) LIKE LOWER($1)
        `;

        const params = [`${name}%`]
        return await database.query(query, params);
    }

    const query = `
        SELECT 
            games.id, 
            games.name, 
            games.image, 
            games."stockTotal", 
            games."categoryId",
            games."pricePerDay",
            categories.name as "categoryName"
        FROM games
        JOIN categories
        ON categories.id = games."categoryId"
    `;
    return await database.query(query);
}