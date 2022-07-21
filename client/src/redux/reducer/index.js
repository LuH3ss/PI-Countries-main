import { ALL_COUNTRIES } from "../actions/actionTypes"


const initialStates = {
    countries: [],

}

const reducer = (state = initialStates, action) => {
    switch(action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload //la dataDb
            }
        default: return state
    }

}

export default reducer