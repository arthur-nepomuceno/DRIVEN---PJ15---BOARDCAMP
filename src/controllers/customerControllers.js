import connection from '../dbStrategy/postgres.js';

export async function getCustomers(request, response){
    const { cpf } = request.query;
    try {
        const query = (cpf ? `SELECT * 
                              FROM customers
                              WHERE cpf LIKE $1;`
                           : `SELECT * 
                              FROM customers;`)
        const {rows: customers} = await connection.query(query, cpf ? [`${cpf}%`] : null);
        response.status(200).send(customers);
    } catch(error){
        response.sendStatus(500);
    }
}

export async function getCustomerById(request, response){
    const { id } = request.params;
    try{
        const query = `SELECT * FROM customers WHERE id = $1`
        const {rows: validId} = await connection.query(query, [`${id}`])
        return response.send(validId);
    }catch(error){
        return response.sendStatus(500)
    }
}

export async function postCustomers(request, response){
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

export async function putCustomerById(request, response){
    const { id } = request.params;
    const body = request.body;
    const {name, phone, cpf, birthday} = body;
    try{
        const query = `UPDATE customers
                       SET name = '${name}', phone = '${phone}', cpf = '${cpf}', birthday = '${birthday}'
                       WHERE id = $1`
        await connection.query(query, [`${id}`])
        return response.sendStatus(200);
    }catch(error){
        return response.sendStatus(500)
    }
    
}