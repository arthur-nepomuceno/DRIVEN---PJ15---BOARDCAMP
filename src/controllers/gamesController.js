export function createGame(req, res){
    return res.status(201).send('Create game OK.')
}

export function readGames(req, res){
    return res.status(200).send('Read games OK.')
}

export function updateGame(req, res){
    return res.status(202).send('Update game OK.')
}