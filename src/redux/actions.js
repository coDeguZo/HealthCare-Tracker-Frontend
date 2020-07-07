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

export { fetchingCountries, fetchingWorld }