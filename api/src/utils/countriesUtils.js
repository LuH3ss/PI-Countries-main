const axios = require('axios')
const { Op } = require('sequelize')
const{ Country, Activity } = require('../db')

const allCountries = async () => {
    let countriesByDb  =  await Country.findAll({//hacemos una peticion a la DB que va a estar vacio. El findAll( no encontrara nada).
        include: [Activity]
    })
    try {
        if(countriesByDb.length === 0) {
            const { data } = await axios.get('https://restcountries.com/v3/all')//se guarda en memoria la data de la api
            const countries = data.map((country) => {//se guarda un mapeo de la data de la api con el siguiente 'formato' o 'planilla de modelo' del objeto
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags[0],
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : 'Does not have any capital',
                    subregion: country.subregion ? country.subregion : 'Undefined for this country 👀',
                    area: country.area,
                    population: country.population
                }
            });


            countries.forEach((country) => {//se itera sobre lo que haya devuelto el mapeo de la api con el formato correspondiente
                Country.findOrCreate({//a acada elemento mapeado de api le digo que se inserte en la base de datos, asignando a cada api de la Db lo que corresponda teniendo en cuenta el modelo del mapeo
                    where: { id: country.id },
                    defaults: {
                        id: country.id,
                        name: country.name,
                        flags: country.flags,
                        continents: country.continents,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    }
                })
            });


            countriesByDb = await Country.findAll({//ahora el findAll va a devolver la data  que le pedimos a la base de datos(que antes estaba vacia)
                include: [Activity]
            });
        }

        return countriesByDb;

    } catch (error) {
        console.log('allCountries failing (>.<)' + error)
    }
}

const countriesByName = async (name) => {//esta funcion tiene un argumento que despues sera asignado al valor de una posible req.query en las routes
    try {
        const CBN = await Country.findAll({//hace peticion a la Db poniendo un 'filtro' donde acepta los que en su campo 'name:' tenga algo parecido a lo que llegie por arg
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [Activity]
        });

        return CBN;
    } catch(error) {
        console.log('countriesByName failing (>.<)')
    }
}

module.exports = {
    allCountries,
    countriesByName
}
