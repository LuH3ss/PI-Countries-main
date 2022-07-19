const axios = require('axios')
const{ Country, Activity } = require('../db')

const preLoadDb = async () => {
    const url = await axios('https://restcountries.com/v3/all')
    .then(json => json.data.map(country => {
        return ({
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continent: country.continents.map(con => con),
            capital: country.capital ? country.capital[0] : "Does not have a capital",
            subregion: country.subregion,
            area: country.area,
            population: country.population
        })
    }))
    //console.log(url)
   const allData = Country.findAll({include: Activity})
    if(!allData.length) {
        Country.bulkCreate(url)
    }
}

module.exports = {
    preLoadDb
}
