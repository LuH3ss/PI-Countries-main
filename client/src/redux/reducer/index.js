import {
    ALL_COUNTRIES,
    COUNTRY
} from "../actions/actionTypes"


const initialStates = {
    countries: [],
    countriesAux: [], //este arreglo es una copia del countries original. Está para que en el renderizado, no cuente con un unico arreglo y las acciones no sean permanentes.
    countryDetail: {},
    activities: []
}

const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload, //la dataDb
                    countriesAux: action.payload
            }
            case 'BY_MORE_POP': 
            return {
                ...state,
                countries: state.countriesAux.filter(country => {
                    return country.population > 1000000
                })
            }
            case 'BY_CONTINENT':
                return {
                    ...state,

                    countries:
                        action.payload === 'Todos' ?
                        state.countriesAux :
                        state.countriesAux.filter((country) => {
                            return country.continents === action.payload //continent
                        })
                }
                case 'BY_POPULATION':
                    let countriesByPop = [...state.countriesAux].sort((a, b) => {
                        if (action.payload === 'less_population') {
                            if (a.population > b.population) {
                                return 1;
                            }
                            if (a.population < b.population) {
                                return -1;
                            }

                            return 0;
                        };
                        if (action.payload === 'more_population') {
                            if (a.population < b.population) {
                                return 1;
                            }
                            if (a.population > b.population) {
                                return -1;
                            }
                            return 0;
                        }
                        return 0
                    })

                    return {
                        ...state,
                        countries:
                            action.payload === 'Todos' ?
                            state.countriesAux :
                            countriesByPop

                    }
                    case 'SORTED':
                        let countriesSorted = [...state.countriesAux].sort((a, b) => {
                            if (action.payload === 'ascendente') {
                                if (a.name > b.name) {
                                    return 1;
                                }
                                if (a.name < b.name) {
                                    return -1;
                                }

                                return 0;
                            };
                            if (action.payload === 'descendente') {
                                if (a.name < b.name) {
                                    return 1;
                                }
                                if (a.name > b.name) {
                                    return -1;
                                }
                                return 0;
                            }
                            return 0
                        })
                        return {
                            ...state,
                            countries: state.countries = countriesSorted,
                                countriesAux: state.countriesAux = countriesSorted
                        }
                        case COUNTRY:
                            return {
                                ...state,
                                countryDetail: action.payload
                            }
                            case 'CLEAN':
                                return {
                                    ...state,
                                    countryDetail: action.payload
                                }
                                case 'COUNTRY_NAME':
                                    return {
                                        ...state,
                                        countries: action.payload,
                                            countriesAux: action.payload
                                    }
                                    case 'POST_ACTIVITY':
                                        return {
                                            ...state
                                        }
                                        case 'ALL_ACTIVITIES':
                                            return {
                                                ...state,
                                                activities: action.payload
                                            }
                                            case 'BY_ACTIVITY':
                                                const allCountries =[ ...state.countriesAux];
                                                const auxCountries =[...state.countriesAux];
                                                const byAct = action.payload === 'Todos' ? auxCountries : allCountries.filter(country => country.activities?.find(act => act.name === action.payload))
                                                return {
                                                    ...state,
                                                    countries: byAct,
                                                    countriesAux: allCountries 
                                                }
                                                default:
                                                    return state
    }

}



export default reducer