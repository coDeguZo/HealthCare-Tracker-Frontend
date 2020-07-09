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

const mapButtonReducer = (state = "Cases", action) => {
    switch(action.type){
        case "CLICKED_MAP_BUTTON":
            return action.payload.target.innerText
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentMapButton: mapButtonReducer,
    countries: countryReducer,
    world: worldReducer
});


export default rootReducer;