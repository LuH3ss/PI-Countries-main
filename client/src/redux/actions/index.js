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
        type: 'BY_CONTINENT',
        payload: continent
    }

}

export function getActivity (payload) {
    return async (dispatch) => { 
        const dataDb = await axios(`${EP}/activities`, payload);
        return dispatch ({
            type: 'ALL_ACTIVITIES',
            payload: dataDb.data
        })
    }
}

export function postActivity () {
    return async (dispatch) => { 
        const response = await axios.post(`${EP}/activities`);
        return response
    }
}


export function getOrdered (value) {
    return {
        type: 'SORTED',
        payload: value
    }
}

export function getName (name) {
    // return async (dispatch) => {
    //     const dataDb = await axios(`${EP}/countries?name=` + name);
    //     return dispatch {
    //         type: 'COUNTRY_NAME',
    //         payload: dataDb.data
    //     }
    // }
    return async (dispatch) => {
        const dataDb = await axios(`${EP}/countries?name=` + name);
        return dispatch({
            type: 'COUNTRY_NAME',
            payload: dataDb.data
        })
    }
}