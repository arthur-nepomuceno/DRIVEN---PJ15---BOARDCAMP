import connection from "../dbStrategy/postgres.js";

export async function validatePostRental(request, response, next){
    const {customerId, gameId, daysRented} = request.body;
    
    if (daysRented < 0){
        return response.sendStatus(400);
    }

    try {
        const customerIdQuery = `SELECT * FROM customers 
                                 WHERE customers.id = $1;`
        const {rows: validCostumerId} = await connection.query(customerIdQuery, [`${customerId}`]);
        if(validCostumerId.length === 0){
            return response.sendStatus(404);
        }

        const gameIdQuery = `SELECT * FROM games
                             WHERE games.id = $1;`
        const {rows: validGameId} = await connection.query(gameIdQuery, [`${gameId}`]);
        if(validGameId.length === 0){
            return response.sendStatus(404);
        }

    } catch(error) {
        return response.sendStatus(500);
    }
    next();
}