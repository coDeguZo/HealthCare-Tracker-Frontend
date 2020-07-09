function fetchingCountries(){
    return (dispatch) => {
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
        .then(resp => resp.json())
        .then(countries => {
            dispatch(fetchedCountries(countries))
        })
    }
}

function fetchedCountries(countries){
    return {type: "FETCHED_COUNTRIES", payload: countries}
}

function fetchingWorld(){
    return (dispatch) => {
        fetch("https://coronavirus-19-api.herokuapp.com/countries/world")
        .then(resp => resp.json())
        .then(world => {
            dispatch(fetchedWorld(world))
        })
    }
}

function fetchedWorld(world){
    return {type: "FETCHED_WORLD", payload: world}
}

function clickingMapButton(event){
    return (dispatch) => {
        // debugger
        dispatch(clickedMapButton(event))
    }
}

function clickedMapButton(event){
    return {type: "CLICKED_MAP_BUTTON", payload: event}
}

export { fetchingCountries, fetchingWorld, clickingMapButton }