export function createClient(req, res){
    return res.status(201).send('Create client OK.')
}

export function readClients(req, res){
    return res.status(200).send('Read clients OK.')
}