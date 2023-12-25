// const cars = require("../advertsCars.json");
const Advertisement = require("../models/Advertisement")

 async function getAdvertisementById (id) {
    let result = await Advertisement.findById(id)
    return result
}

module.exports = getAdvertisementById