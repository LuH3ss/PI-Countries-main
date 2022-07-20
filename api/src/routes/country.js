const { Router } = require('express')
const {countryById } = require('../utils/countryById')
const router = Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const CBI = await countryById(id)
        CBI ? 
        res.status(200).send(CBI) :
        res.status(404).send('Country not found (>.<) | Error 404')

    } catch (error) {
        console.log('Gettin country by Id failing at' + error)

    }
})

module.exports = router