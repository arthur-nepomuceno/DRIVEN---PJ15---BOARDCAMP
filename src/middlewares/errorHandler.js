export function errorHandler(error, req, res, next){
    console.log(error);

    const {type, status, message} = error;

    if(type === 'invalid_name') return res.status(status).send(message);
    if(type === 'invalid_category') return res.status(status).send(message);

    return res.status(500).send(`Unexpected server error: ${error}.`)
}