import React from 'react'
import {connect} from 'react-redux'
import {fetchingCountries} from '../redux/actions'
import Country from '../components/Country'
import World from '../components/World'

class CountryContainer extends React.Component{

    componentDidMount(){
        this.props.fetchingCountries()
    }
    
    render(){
        return (
            <div className="ConfirmedCases-div">
                <div className="left-country-container-div">
                    <h4>Confirmed Cases by Country/Region/Territory</h4>
                    {this.props.countries.map(country => {
                    return country.country === "World" ?
                        null
                        :
                        <div>
                        <Country key={country.country} country={country} />
                        <hr></hr>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchingCountries: () => {dispatch(fetchingCountries())},
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(CountryContainer));