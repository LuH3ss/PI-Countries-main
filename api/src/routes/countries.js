const { Router } = require('express')
const {allCountries, countriesByName } = require('../utils/countriesUltis')
const router = Router();

router.get('/', async (req, res) => {// antes de cargar cualquier ruta que ya incliya, la barra, primero va a ejecutar esta funcion y depues, ejecutara lo que corresponda a lo que venga DESPUES de la '/'
    const { name } = req.query;
    try {
        if(name) {
            const CBN = await countriesByName(name) //en caso de haber un name, llama a la funcion en el arg que llegue por query. (trabaja con db, ya no con la api)
                if(CBN.length !== 0) {
                    res.status(200).send(CBN);
                } else {
                    res.status(404).send('Country not found (O-o) | Error 404');
                }
                } else {
                    const allC = await allCountries();
                    if(allC) {
                            res.status(200).send(allC)
                            } else {
                                    res.status(404).send('Countries not found (O-o) | Error 404')
                                    }
                        }
        } catch(error) {
                        console.log('allCountries failing (U_U)')
                        }
});
module.exports = router