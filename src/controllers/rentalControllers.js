import connection from "../dbStrategy/postgres.js";
import dayjs from 'dayjs';

export async function getRentals(request, response){
    response.send('get rentals ok');
}

export async function postRentals(request, response){
    const body = request.body;
    const {customerId, gameId, daysRented} = body;
    
    try {
        const rentDate = dayjs().format('YYYY-MM-DD');
        const returnDate = null;
        const delayFee = null;
        const {rows: gameInfo} = await connection.query(`SELECT *
                                                          FROM games
                                                          WHERE games.id = $1`, [`${gameId}`])
        const gamePrice = gameInfo[0].pricePerDay;                                     
        const originalPrice = daysRented * `${gamePrice}`;
        
        await connection.query(`INSERT INTO rentals 
                                ("customerId", 
                                 "gameId", 
                                 "rentDate", 
                                 "daysRented", 
                                 "returnDate",
                                 "originalPrice",
                                 "delayFee")
                                VALUES
                                (${customerId},
                                 ${gameId},
                                 ${rentDate},
                                 ${daysRented},
                                 ${returnDate},
                                 ${originalPrice},
                                 ${delayFee});`)
    
        return response.sendStatus(201);
    } catch(error) {
        return response.sendStatus(500);
    }
}