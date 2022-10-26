export function createRent(req, res){
    return res.status(201).send('Create rent OK.')
}

export function readRents(req, res){
    return res.status(200).send('Read rents OK.')
}

export function updateRent(req, res){
    return res.status(202).send('Update rent OK.')
}

export function deleteRent(req, res){
    return res.status(202).send('Delete rent OK.')
}