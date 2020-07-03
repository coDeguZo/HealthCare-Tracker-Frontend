import React from 'react'
import {connect} from 'react-redux'
import {fetchingCountries} from '../redux/actions'
import Country from '../components/Country'

class CountryContainer extends React.Component{

    componentDidMount(){
        this.props.fetchingCountries()
    }
    
    render(){
        return (
            <div>
                {this.props.countries.map(country => <Country key={country.id} country={country} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchingCountries: () => {dispatch(fetchingCountries())},
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(CountryContainer));