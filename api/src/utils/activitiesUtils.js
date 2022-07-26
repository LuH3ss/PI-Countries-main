
const {Activty, Country} = require('../db') 

const postActivityUtils = async (name, difficulty, duration, season, countries) => {
    try {
    let act = await Activty.create({
        name, 
        difficulty,
        duration,
        season
    })// crea en la db con los args
    
    let conts = await Country.findAll({
        where: {
            name: countries
        }
    })
    return act.addCountry(conts)
    
    } catch(error) {
        console.log("postActivityutils failing ('O')" + error)
    }
}

module.exports = postActivityUtils
