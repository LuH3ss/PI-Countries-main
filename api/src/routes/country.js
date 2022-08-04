const { Router } = require('express')
const {countryByIdUtils } = require('../utils/countryByIdUtils')
const router = Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        (countryByIdUtils(id)).then(CBI => {
            CBI ? 
            res.status(200).send(CBI) :
            res.status(404).send('Country not found (>.<) | Error 404')

        }) 

    } catch (error) {
        console.log('Gettin country by Id failing at' + error)

    }
})

module.exports = router