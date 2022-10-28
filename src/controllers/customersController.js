import * as customerService from "../services/customerServices.js"

export async function addElement(req, res) {
    const body = req.body;

    await customerService.checkCPF(body.cpf);
    const responde = await customerService.addElement(body);


    return res.status(201).send(responde);
}

export async function getElements(req, res) {
    const CPF = req.query.cpf;
    if (CPF) {
        const response = await customerService.getElementByCPFPiece(CPF)
        return res.status(200).send(response);
    }
    const response = await customerService.getElements();
    return res.status(200).send(response)
}

export async function getElementById(req, res) {
    const { id } = req.params
    const response = await customerService.getElementById(id);
    return res.status(200).send(response)
}

export async function updateElement(req, res) {
    const element = req.body;
    const { id } = req.params;
    const response = await customerService.updateElement(id, element);
    return res.status(202).send(response);
}
