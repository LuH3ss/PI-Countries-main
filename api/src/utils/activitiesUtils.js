
const {Activty, Country} = require('../db') 

async function postActivityUtils (name, difficulty, duration, season, countries)  {
    try {
    let act = await Activty.create({
        name, 
        difficulty,
        duration,
        season,
        
    })// crea en la db con los args
    
    let conts = await Country.findAll({
        where: {
            name: countries
        }
    })
    await act.addCountry(conts)

    
    } catch(error) {
        console.log("postActivityUtils failing ('O')" + error)
    }
}

module.exports = postActivityUtils
