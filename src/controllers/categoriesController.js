import * as categoryServices from "../services/categoryServices.js"

//recieves a name from the request and sends it to category services.
export async function createCategory(req, res) {
    const { name } = req.body;

    await categoryServices.checkName(name);
    await categoryServices.createCategory(name);

    return res.status(201).send('ok');
}


//gets the list of categories and shows it as response
export async function readCategories(req, res) {

    const categories = await categoryServices.readCategories();
    return res.status(200).send(categories);
}