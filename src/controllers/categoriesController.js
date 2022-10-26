import * as categoryServices from "../services/categoryServices.js"

export async function createCategory(req, res){
    const body = req.body;

    await categoryServices.checkName(body.name);

    return res.status(201).send('OK');
}

export async function readCategories(req, res){
    return res.status(200).send('OK');
}