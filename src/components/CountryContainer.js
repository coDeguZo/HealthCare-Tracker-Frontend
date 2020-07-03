import react from 'react'
import {connect} from 'react-redux'

const CountryContainer = (props) => {

    return (
        <div>
        
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//       RetrievedCountries: (info) => {dispatch(sortByPrice(info))},
//     }
// }

export default (connect(mapStateToProps, null)(CountryContainer));