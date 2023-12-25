const express = require("express");
const cors = require("cors");
const getAdvertisementById = require("./utils/getAdvertisementById.js");
const mongoose = require('mongoose');
require('dotenv').config()
const {DB_HOST, PORT = 4000} = process.env;
const Advertisement = require('./models/Advertisement.js')

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(4000, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });


const cars = require("./advertsCars.json");

const app = express();
app.use(cors());

app.get("/advertisements", async (req, res) => {
  let { brand, price, mileageTo = 200000, mileageFrom = 0, offset = 0, amount = 10 } = req.query;
  let result = await Advertisement.find({$and:[
  {make:brand || {$regex:/.*/}},
    {mileage: {$gte:+mileageFrom, $lte:+mileageTo}}
  ]})
console.log(result)
//   if (!brand) {
//     result = result.filter((ad) => ad.make == brand);
//   }
  if (price) {
    result = result.filter(
      (ad) => Number(ad.rentalPrice.substring(1)) <= Number(price)
    );
  }
//   if (mileageFrom < mileageTo) {
//     result = result.filter(
//       (ad) =>
//         !isNaN(ad.mileage) &&
//         ad.mileage >= +mileageFrom &&
//         ad.mileage <= +mileageTo
//     );
//   }
console.log(offset)
  res.json(result.slice(+offset, +amount + +offset));
});

app.get("/brands", (req, res) => {
  res.json(cars.map((i) => i.make));
});

app.get("/advertisement/:id", async (req, res) => {
  let id = req.params.id;
  let advertisement = await getAdvertisementById(id);
  res.json(advertisement);
});


// доробити
app.post("/advertisement", async (req, res) => {
    Advertisement.insert()
} )

