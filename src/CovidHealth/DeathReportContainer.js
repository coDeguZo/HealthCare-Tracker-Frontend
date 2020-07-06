import React from 'react'
import {connect} from 'react-redux'
import {fetchingCountries} from '../redux/actions'
import Deaths from '../components/Deaths'


class DeathReportContainer extends React.Component {

    componentDidMount(){
        this.props.fetchingCountries()
    }

    render(){
    return (
        <div className="ConfirmedCases-div">
                <div className="right-country-container-div">
                    <h4>Global Deaths</h4>
                    {this.props.countries.map(country => {
                    return country.country === "World" ?
                        null
                        :
                        <div>
                        <Deaths key={country.country} country={country} />
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingCountries: () => {dispatch(fetchingCountries())},
      }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DeathReportContainer));