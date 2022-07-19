const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// GET https://restcountries.com/v3/all

// router.get('/countries', async (req, res) => {
//     const countries = await getAllCountries()
//     res.status(200).send(countries)
// })

// GET https://restcountries.com/v3/name/{name}
// GET https://restcountries.com/v3/alpha/{code}




module.exports = router;
