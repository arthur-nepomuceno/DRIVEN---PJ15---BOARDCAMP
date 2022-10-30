import * as rentsRepository from "../repositories/rentsRepository.js"
import dayjs from "dayjs";

export async function checkCustomerId(customerId) {
    const response = await rentsRepository.getElementByCustomerId(customerId);
    if (response.rowCount === 0) throw {
        type: 'invalid_customer',
        status: 400,
        message: '_customer not found_'
    }

    return;
}

export async function checkGameId(gameId) {
    const response = await rentsRepository.getElementByGameId(gameId);
    if (response.rowCount === 0) throw {
        type: 'invalid_game',
        status: 400,
        message: '_game not found_'
    }

    return;
}

export async function checkDaysRented(daysRented) {
    if (daysRented === 0) throw {
        type: 'invalid_rent_time',
        status: 400,
        message: '_you cannot rent something for 0 days_'
    }
}

export async function getRentDate() {
    return dayjs().format('YYYY-MM-DD');
}

export async function getOriginalPrice(daysRented, gameId) {
    const game = await rentsRepository.getElementByGameId(gameId);
    const pricePerDay = game.rows[0].pricePerDay;
    return daysRented * pricePerDay;
}

export async function checkGameAvailability(gameId) {
    //search for game
    //searcf for rent records of this game
    /*
        compare the number of games available in stock
        with the number of records with returnDate = null
    */

    const game = await rentsRepository.getElementByGameId(gameId);
    const records = await rentsRepository.getElementsByGameId(gameId);

    const stockTotal = game.rows[0].stockTotal;
    const openRents = records.rowCount;

    if (openRents >= stockTotal) throw {
        type: 'game_unavailable',
        status: 400,
        message: '_All our versions of this game are rented_'
    }

    return;
}

export async function addElement(element) {
    await rentsRepository.addElement(element);
    return;
}

export async function getElementById(id) {
    const record = await rentsRepository.getElementById(id);
    const response = getList(record.rows);
    return response;
}

export async function getElements(customerId, gameId) {
    if (customerId) {
        const record = await rentsRepository.getElements(customerId, null);
        let response = getList(record.rows);
        return response;
    }

    if (gameId) {
        const record = await rentsRepository.getElements(null, gameId);
        let response = getList(record.rows);
        return response;
    }

    const record = await rentsRepository.getElements();
    let response = getList(record.rows);
    return response;
}

export async function checkElementId(id) {
    const response = await rentsRepository.getElementById(id);
    if (response.rowCount === 0) throw {
        type: 'invalid_id',
        status: 404,
        message: '_the rent you are looking for does not exist_'
    }
}

export async function checkOpenRent(id) {
    const response = await rentsRepository.getElementById(id);
    if (response.rows[0].returnDate !== null) throw {
        type: 'closed_rent',
        status: 400,
        message: '_the rent you are looking for is already closed_'
    }
    return;
}

function getList(arr) {
    let list = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        list.push(
            {
                id: element.id,
                customerId: element.customerId,
                gameId: element.gameId,
                rentDate: element.rentDate,
                daysRented: element.daysRented,
                returnDate: element.returnDate,
                originalPrice: element.originalPrice,
                delayFee: element.delayFee,
                customer: {
                    id: element.customerId,
                    name: element.customerName,
                },
                game: {
                    id: element.gameId,
                    categoryId: element.categoryId,
                    categoryName: element.categoryName
                }

            }
        )
    }
    return list;
}

export async function getReturnDate() {
    return dayjs().format('YYYY-MM-DD');
}

export async function getDelayFee(id, returnDate) {
    const element = await rentsRepository.getElementById(id);
    const { rentDate, daysRented, originalPrice } = element.rows[0];

    const rentTime = dayjs(returnDate).diff(rentDate, "days");
    const delay = rentTime - daysRented;
    if(delay > 0){
        return delay * originalPrice;
    }

    return 0; 
}

export async function closeRent(id, returnDate, delayFee){
    return await rentsRepository.updateElement(id, returnDate, delayFee);
}

export async function deleteRent(id){
    return await rentsRepository.deleteElement(id)
}