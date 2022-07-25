import connection from '../dbStrategy/postgres.js'

export async function postCustomer(request, response){
    const body = request.body;
    const {name, phone, cpf, birthday} = body;
    try{
        const query = `INSERT INTO customers (name, phone, cpf, birthday)
                       VALUES ('${name}', '${phone}', '${cpf}', '${birthday}');`
        await connection.query(query);        
        return response.sendStatus(201);
    }catch(error){
       return response.sendStatus(500);
    }

}