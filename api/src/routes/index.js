const { Router } = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries.js')
const country = require('./country')
const activity = require('./activity')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries)//cuando se use un metodo en esa ruta explicitamente, requerira el codigo de countries.js
router.use('/countries', country)
router.use('/activities', activity)



module.exports = router;
