import { combineReducers } from "redux";

const countryReducer = (state = [], action) => {
    switch (action.type){
        case "FETCHED_COUNTRIES":
            return action.payload
        default:
            return state
    }
}

const worldReducer = (state = [], action) => {
    switch(action.type){
        case "FETCHED_WORLD":
            return action.payload
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    countries: countryReducer,
    world: worldReducer
});


export default rootReducer;