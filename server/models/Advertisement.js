const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AdvertisementSchema = new Schema( {
    "id": ObjectId,
    "year": Number,
    "make": String,
    "model": String,
    "type": String,
    "img": String,
    "description": String,
    "fuelConsumption": String,
    "engineSize": String,
    "accessories": [
        String
    ],
    "functionalities": [
        String
    ],
    "rentalPrice": String,
    "rentalCompany": String,
    "address": String,
    "rentalConditions": String,
    "mileage": Number
});

const Advertisement = mongoose.model("Advertisement", AdvertisementSchema)

module.exports = Advertisement