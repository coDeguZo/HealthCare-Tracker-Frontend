import React from 'react'
import {Grid} from 'semantic-ui-react'

const CountryData = (props) => {
    console.log(props)
    return (
        <div>
            <Grid>
                <Grid.Row>
                <Grid.Column width={2}>
                    <h3 style={{color: "#6DF3F3"}}>{props.country.country}</h3>
                </Grid.Column>
                <Grid.Column width={2}>
                    <h3 style={{color: "white"}}>{props.country.todayCases}</h3>
                </Grid.Column>
                <Grid.Column width={2}>
                    <h3 style={{color: "white"}}>{props.country.todayDeaths}</h3>
                </Grid.Column>
                <Grid.Column width={2}>
                    <h3 style={{color: "white"}}>{props.country.casesPerOneMillion}</h3>
                </Grid.Column>
                <Grid.Column width={3}>
                    <h3 style={{color: "white"}}>{props.country.deathsPerOneMillion}</h3>
                </Grid.Column>
                <Grid.Column width={2}>
                    <h3 style={{color: "white"}}>{props.country.critical}</h3>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default CountryData