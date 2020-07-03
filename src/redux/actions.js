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






export { fetchingCountries }