import * as gameServices from "../services/gameServices.js";
import * as categoryServices from "../services/categoryServices.js";

//creates a new game and returns it's register
export async function createGame(req, res) {
    const body = req.body;

    await gameServices.checkName(body.name);
    await categoryServices.checkCategoryId(body.categoryId);
    await gameServices.createGame(body);
    const record = await gameServices.readGameByName(body.name);

    return res.status(201).send(record);
}

//gets the list of all games
export async function readGames(req, res) {
    const name = req.query.name;
    if(name){
        const games = await gameServices.readGames(name);
        return res.status(200).send(games);
    }

    const games = await gameServices.readGames();
    return res.status(200).send(games);
}