import { database } from "../db/postgres.js"

export async function addElement(element) {
    const { name, phone, cpf, birthday } = element;

    const query = `
        INSERT INTO customers(name, phone, cpf, birthday) 
        VALUES ($1, $2, $3, $4)
    `;

    const params = [name, phone, cpf, birthday];

    return await database.query(query, params);
}

export async function getElements() {
    return await database.query(`SELECT * FROM customers`)
}

export async function getElementByCPF(CPF) {
    return await database.query(`SELECT * FROM customers WHERE cpf = $1`, [CPF]);
}

export async function getElementByCPFPiece(CPF) {
    const query = `
        SELECT * FROM customers
        WHERE cpf LIKE $1
    `;

    const params = [`${CPF}%`]

    return await database.query(query, params);
}

export async function getElementById(id) {
    return await database.query(`SELECT * FROM customers WHERE id = $1`, [id]);
}

export async function updateElement(element) {
    const { name, phone, cpf, birthday } = element;

    const query = `
        UPDATE customers
        SET name=$1, phone=$2, birthday=$4
        WHERE cpf=$3 
    `;

    const params = [name, phone, cpf, birthday];
    
    return await database.query(query, params);
}