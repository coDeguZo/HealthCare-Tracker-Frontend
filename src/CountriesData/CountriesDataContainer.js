import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CountryData from './CountryData'
import {Grid} from 'semantic-ui-react'

function CountriesDataContainer(props) {

    return !props.countries ? null : (
        <div>
             <div className="country-data-div">
                <div className="country-container-div">
                    <div className="country-container-labels-div">
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={2}>
                                    <h3 style={{color: "white"}}>Country Name</h3>
                                    <hr />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <h3 style={{color: "white"}}>Today's Cases</h3>
                                    <hr />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <h3 style={{color: "white"}}>Today's Deaths</h3>
                                    <hr />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <h3 style={{color: "white"}}>Critical</h3>
                                    <hr />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <h3 style={{color: "white"}}>Cases Per One Million</h3>
                                    <hr />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <h3 style={{color: "white"}}>Deaths Per One Million</h3>
                                    <hr />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                    <Grid>
                        <Grid.Column>
                            {props.countries.map(country => {
                                    return <CountryData key={country.country} country={country}/>
                            })}
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps)(CountriesDataContainer)
// export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCourse)
