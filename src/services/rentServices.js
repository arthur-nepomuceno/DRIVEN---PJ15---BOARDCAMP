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

export async function getElements(customerId, gameId) {
    if(customerId){
        const record = await rentsRepository.getElements(customerId, null);
        let response = getList(record.rows);
        return response;
    }

    if(gameId){
        const record = await rentsRepository.getElements(null, gameId);
        let response = getList(record.rows);
        return response;
    }

    const record = await rentsRepository.getElements();
    let response = getList(record.rows);
    return response;
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