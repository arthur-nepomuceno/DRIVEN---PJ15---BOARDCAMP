export function errorHandler(error, req, res, next){
    console.log(error);

    const {type, status, message} = error;

    if(type === 'invalid_name') return res.status(status).send(message);
    if(type === 'invalid_category') return res.status(status).send(message);
    if(type === 'invalid_CPF') return res.status(status).send(message);
    if(type === 'invalid_CPF_search') return res.status(status).send(message);
    if(type === 'invalid_id_search') return res.status(status).send(message);
    if(type === 'invalid_id') return res.status(status).send(message);
    if(type === 'invalid_element') return res.status(status).send(message);
    if(type === 'invalid_customer') return res.status(status).send(message);
    if(type === 'invalid_game') return res.status(status).send(message);
    if(type === 'invalid_rent_time') return res.status(status).send(message);

    return res.status(500).send(`Unexpected server error: ${error}.`)
}