import * as customersRepository from "../repositories/customersRepository.js";

export async function checkCPF(CPF){
    const response = await customersRepository.getElementByCPF(CPF);
    
    if(response.rowCount > 0) throw {
        type: 'invalid_CPF',
        status: 409,
        message: '_the CPF you are trying to register already exists_'
    }

    return;
}

export async function addElement(element){
    await customersRepository.addElement(element);
    const response = await customersRepository.getElementByCPF(element.cpf);

    return response.rows[0];
}

export async function getElements(){
    const response = await customersRepository.getElements();
    return response.rows;
}

export async function getElementByCPFPiece(CPF){
    const response = await customersRepository.getElementByCPFPiece(CPF)

    if(response.rowCount === 0) throw {
        type: 'invalid_CPF_search',
        status: 422,
        message: '_the CPF you are trying to find does not exist_'
    }
    return response.rows;
}

export async function getElementById(id){
    const response = await customersRepository.getElementById(id)

    if(response.rowCount === 0) throw {
        type: 'invalid_id_search',
        status: 404,
        message: '_the id you are trying to find does not exist_'
    }
    return response.rows;
}

export async function updateElement(id, element){
    const response = await customersRepository.getElementById(id);
    if(response.rowCount === 0) throw {
        type: 'invalid_id',
        status: 404,
        message: '_the id you are trying to find does not exist_'
    }

    const data = response.rows[0];
    if(data.cpf !== element.cpf) throw {
        type: 'invalid_element',
        status: 409,
        message: '_cpf does not match_'
    }

    await customersRepository.updateElement(element);

    const res = await customersRepository.getElementById(id);

    return res.rows[0];
}