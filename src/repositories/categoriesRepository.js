import { database } from "../db/postgres.js"

//finds the name on the database, if exists.
export async function findCategoryName(name) {
    return await database.query(`SELECT name FROM categories WHERE name = $1`, [name]);
}

//finds the id on the database, if exists.
export async function findCategoryId(id) {
    return await database.query(`SELECT id FROM categories WHERE id = $1`, [id]);
}

//register the new category on the database.
export async function createCategory(name) {
    return await database.query(`INSERT INTO categories(name) VALUES ($1)`, [name])
}

//gets the list of categories from the database.
export async function readCategories() {
    return await database.query(`SELECT * FROM categories`);
}

