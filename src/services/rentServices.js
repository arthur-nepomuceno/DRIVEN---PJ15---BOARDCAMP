import * as rentsRepository from "../repositories/rentsRepository.js"

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
    return new Date();
}

export async function getOriginalPrice(daysRented, gameId) {
    const game = await rentsRepository.getElementByGameId(gameId);
    const pricePerDay = game.rows[0].pricePerDay;
    return daysRented * pricePerDay;
}

export async function checkGameAvailability(gameId) {
    return;
}

export async function addElement(element){
    await rentsRepository.addElement(element);
    return;
}