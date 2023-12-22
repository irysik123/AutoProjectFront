const cars = require("../advertsCars.json");

 function getAdvertisementById (id) {
    let result = cars.find(car => car.id == id)
    return result
}

module.exports = getAdvertisementById