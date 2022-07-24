import connection from "../dbStrategy/postgres.js";

export async function getGames(request, response){
    const {name} = request.query;
    try {
        const query = (name ? `SELECT games.*, categories.name AS "categoryName"
                               FROM games
                               JOIN categories 
                               ON games."categoryId" = categories.id
                               WHERE LOWER(games.name) LIKE LOWER($1);`
                             :`SELECT games.*, categories.name AS "categoryName" 
                               FROM games 
                               JOIN categories 
                               ON games."categoryId" = categories.id;`)
                             
                       
        
        const {rows: games} = await connection.query(query, name ? [`${name}%`] : null);
        response.status(200).send(games);
    }catch(error){
        response.sendStatus(500);
    }
}

export async function postGames(request, response){
    const {name, image, stockTotal, categoryId, pricePerDay} = request.body;
    try{
        await connection.query(`INSERT INTO games 
                                (name, 
                                 image, 
                                 "stockTotal", 
                                 "categoryId", 
                                 "pricePerDay")
                                VALUES
                                ('${name}',
                                 '${image}',
                                  ${stockTotal},
                                  ${categoryId},
                                  ${pricePerDay});`)
        return response.sendStatus(201);
    }catch(error){
        return response.sendStatus(500);
    }
}