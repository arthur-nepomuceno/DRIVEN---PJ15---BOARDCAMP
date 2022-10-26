export function errorHandler(req, res, next, error){
    console.log(error);

    //if(error.type === 'my_error_message') return res.status(status_code).send(error.message);

    res.status(500).send(`Unexpected server error: ${error}.`)
}