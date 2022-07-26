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

export function getById (id) {
    return async (dispatch) => {
        const dataDb = await axios(`${EP}/countries/${id}`);
        return dispatch({
            type: COUNTRY,
            payload: dataDb.data
        })
    }
}

export function getByContinent (continent) {
    return {
        type: 'byContinent',
        payload: continent
    }

}

export function getOrdered (value) {
    return {
        type: 'ordered',
        payload: value
    }
}