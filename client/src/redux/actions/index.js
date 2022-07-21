import { ALL_COUNTRIES, COUNTRY } from "./actionTypes";
import axios from 'axios'
//primero invocamos a la url a la cual le haremos las peticiones

const EP = 'http://localhost:3001' 

export function getAllCountries () {
    return async (dispatch) => { //dispatch, quien pide al store hacer tal cosa
        const dataDb = await axios(`${EP}/countries`);//axios retorna un {} con una prop data, y ahi es donde tango la info que neecesito
        return dispatch ({
            type: ALL_COUNTRIES,
            payload: dataDb.data
        })
    }

}