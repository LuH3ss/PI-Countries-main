const { Router } = require('express');
//const {postActivityUtils} = require('../utils/activitiesUtils');
const {Activity} = require('../db')
const {getActivitiesUtils} = require('../utils/getActivitiesUtils')
const router = Router();
 

router.post('/', async(req, res) => {
    const { name, 
        difficulty,
        duration,
        season,
        countries} = req.body


        if(!name || !difficulty || !duration || !season || !countries){
            return res.status(404).send("Faltan Datos");
        }

        const act = await Activity.create({...req.body})
        
        try {
            console.log(act, "ACT")
        res.status(202).json(act)
    } catch (error) {
        res.status(404).send("Crashero" + error)
         }
});


router.get('/', async (req, res) => {
    try {
        let acts = await getActivitiesUtils();
        res.status(200).send(acts)
    } catch (error) {
        console.log('getActivitiesUtils at routes (>.<)')
    }
})

module.exports = router