const express = require("express");
const cors = require("cors");
const getAdvertisementById = require("./utils/getAdvertisementById.js");

const cars = require("./advertsCars.json");

const app = express();
app.use(cors());

app.get("/advertisements", (req, res) => {
  let { brand, price, mileageTo, mileageFrom, offset = 0, amount = 10 } = req.query;
  let result = cars;
  if (brand) {
    result = result.filter((ad) => ad.make == brand);
  }
  if (price) {
    result = result.filter(
      (ad) => Number(ad.rentalPrice.substring(1)) <= Number(price)
    );
  }
  if (mileageFrom < mileageTo) {
    result = result.filter(
      (ad) =>
        !isNaN(ad.mileage) &&
        ad.mileage >= +mileageFrom &&
        ad.mileage <= +mileageTo
    );
  }
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

app.listen(4000, () => {
  console.log("Server is working!");
});
