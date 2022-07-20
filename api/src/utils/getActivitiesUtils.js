const { Op } = require('sequelize')
const{ Country, Activity } = require('../db')

const getActivitiesUtils = async () => {
    try {
    const acts = await Activity.findAll()
    return acts
        } catch (error) {
            console.log('getActivitiesUtils failing (-.-)' + error)
        }

}
module.exports = getActivitiesUtils;