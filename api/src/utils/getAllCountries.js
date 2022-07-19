const axios = require('axios')
require('dotenv').config();
const {
    Country
} = require('../models/Country')

const getAllData = async () => {
    const url = await axios('https://restcountries.com/v3/all')
        .then(json => json.data.map(country => {
            return ({
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[0],
                continent: country.continents.map(con => con),
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population
            })
        }))

}


const getAllDB = async () => {
    let countries = await Country.findAll()
    return countries
}


module.exports = {
    getAllData
}