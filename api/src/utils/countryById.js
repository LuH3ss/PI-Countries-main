
const{ Country, Activity } = require('../db')


const countryById = async (id) => {
  
    try {
      return await Country.findByPk(id, {
        include: [Activity]
      })
    } catch (error) {
        console.log('countryById failing (X.X)' + error)
    }
}

module.exports = {countryById}