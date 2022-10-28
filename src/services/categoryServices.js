import * as categoryRepository from "../repositories/categoriesRepository.js"

//checks if name is available
export async function checkName(name) {

    const record = await categoryRepository.findCategoryName(name);

    if(record.rowCount > 0) throw {
        type: 'invalid_name',
        status: 409,
        message: 'The category you are trying to create already exists.'
    };

    return;
}

//checks if category exists
export async function checkElementId(id){
    const record = await categoryRepository.findElementId(id);

    if(record.rowCount === 0) throw {
        type: 'invalid_category',
        status: 409,
        message: 'The category you are trying to register your game does not exist.'
    };

    return;
}

//registers the category on the database
export async function createCategory(teach){
    return await categoryRepository.createCategory(teach);
}

//get the categories from the database
export async function readCategories(){
    const response = await categoryRepository.readCategories();
    return response.rows;
}