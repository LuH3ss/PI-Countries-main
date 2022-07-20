
const{ Country, Activity } = require('../db')


const countryByIdUtils = async (id) => {
  
    try {
      return await Country.findByPk(id, {
        include: [Activity]
      })
    } catch (error) {
        console.log('countryByIdUtils failing (X.X)' + error)
    }
}

module.exports = {countryByIdUtils}