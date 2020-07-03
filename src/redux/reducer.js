import { combineReducers } from "redux";

const countryReducer = (state = [], action) => {
    switch (action.type){
        case "FETCHED_COUNTRIES":
            return action.payload
        default:
            return state
    }
}



const rootReducer = combineReducers({
    countries: countryReducer
});


export default rootReducer;