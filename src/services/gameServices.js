import * as gamesRepository from "../repositories/gamesRepository.js"

//checks if game name is available
export async function checkName(name){

    const record = await gamesRepository.findGameName(name);

    if(record.rowCount > 0) throw {
        type: 'invalid_name',
        status: 409,
        message: 'The game you are trying to create already exists.'
    };

    return;
}

//registers the game on the database
export async function createGame(body){
    return await gamesRepository.createGame(body);
}

//gets a game by it's name
export async function readGameByName(name){
    const record = await gamesRepository.findGameName(name);
    return record.rows[0];
}

//gets the list of games
export async function readGames(name){
    const record = await gamesRepository.readGames(name);
    return record.rows;
}
