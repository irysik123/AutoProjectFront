const express = require ('express');
const cors = require('cors')

const cars = require ('./advertsCars.json')

const app = express();
app.use(cors())

app.get('/advertisements', (req,res) => {
    let {brand, price} = req.query;
    let result = cars;
    if (brand) {
        result = result.filter(ad => ad.make == brand)
    }
    if (price) {
        result = result.filter(ad => Number(ad.rentalPrice.substring(1)) <= Number(price))
    }
    res.json(result)
})

app.get('/brands', (req,res) => {
    res.json(cars.map(i => i.make))
})


app.listen(4000, () => {
    console.log("Server is working!")
})

