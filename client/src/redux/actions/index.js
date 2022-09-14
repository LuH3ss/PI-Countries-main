/* eslint-disable no-unreachable */
import { ALL_COUNTRIES, COUNTRY } from "./actionTypes";
import axios from 'axios'
//primero invocamos a la url a la cual le haremos las peticiones

// const EP = 'http://localhost:3001' 

export function getAllCountries () {
    return async (dispatch) => { //dispatch, quien pide al store hacer tal cosa
        const dataDb = await axios(`/countries`);//axios retorna un {} con una prop data, y ahi es donde tango la info que neecesito
        return dispatch ({
            type: ALL_COUNTRIES,
            payload: dataDb.data
        })
    }

}

export function getById (id) {
    return async (dispatch) => {
        const dataDb = await axios(`/countries/${id}`);
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

export function getByPopulation (population) {
    return {
        type: 'BY_POPULATION',
        payload: population
    }
}

export function getByMorePop(population) {
    return {
        type: 'BY_MORE_POP',
        payload: population
    }
}

export function getByActivity (activity) {
    return {
        type: 'BY_ACTIVITY',
        payload: activity
    }

}

export function getActivity () {
    return async (dispatch) => { 
        const dataDb = await axios(`/activities`);
      
        return dispatch ({
            type: 'ALL_ACTIVITIES',
            payload: dataDb.data
        })
    }
}

export function postActivity (payload) {
    return async (dispatch) => { 
        const response = await axios.post(`/activities`, payload);
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
    try {
    return async (dispatch) => {
        const dataDb = await axios(`/countries?name=` + name);
        return dispatch({
            type: 'COUNTRY_NAME',
            payload: dataDb.data
        })
    }
    } catch (err) {
        console.log(err)
    }
}