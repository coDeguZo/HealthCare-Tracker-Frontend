import React from 'react'
import {connect} from 'react-redux'
import {fetchingCountries} from '../redux/actions'
import Recoveries from './Recoveries'

class RecoveryReportContainer extends React.Component {

    componentDidMount(){
        this.props.fetchingCountries()
    }

    render(){
    return (
        <div className="ConfirmedCases-div">
                <div className="right-country-container-div">
                    <h4 style={{color: "white"}}>Global Recoveries</h4>
                    {this.props.countries.map(country => {
                    return country.country === "World" ?
                        null
                        :
                        <div>
                        <Recoveries key={country.country} country={country} />
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

export default (connect(mapStateToProps, mapDispatchToProps)(RecoveryReportContainer));