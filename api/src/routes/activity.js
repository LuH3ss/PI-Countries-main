const {
    Router
} = require('express');

const {
    Activity,
    Country
} = require('../db')



const router = Router();


router.post('/', async (req, res) => {
    const {
        name, difficulty, duration, season, countries} = req.body
    const newAct = { name, difficulty, duration, season, countries}

    if (!name || !difficulty || !duration || !season) {
        return res.status(404).send("Faltan Datos");
    }
    try {
        const act = await Activity.create(newAct)
        let conts = await Country.findAll({
            where: {
                name: countries
            }
        })
        await act.addCountries(conts)

        res.status(202).json(act)
    } catch (error) {
        res.status(404).send("Crashero" + error)
    }
});


router.get('/', async (req, res) => {
    try {
        let acts = await Activity.findAll({
            include: [Country],
            attributes: ['id', 'name']
        })
        res.status(200).json(acts)
    } catch (error) {
        console.log('getActivitiesUtils at routes (>.<)', error)
    }
})




module.exports = router