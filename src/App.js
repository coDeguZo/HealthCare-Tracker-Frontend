import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import Nav from './components/Nav'
import CountryContainer from './ConfirmedCases/CountryContainer'
import WorldContainer from './ConfirmedCases/WorldContainer'
import TimeLastUpdated from './components/TimeLastUpdated'
import MapChartContainer from './WorldMap/MapChartContainer'
import DeathReportContainer from './CovidHealth/DeathReportContainer'
import RecoveryReportContainer from './CovidHealth/RecoveryReportContainer'

class App extends React.Component {
  
  render(){

    return (
      <div className="App">
        <Nav />
        <br/>
        <Grid>

          {/* Grid 1 Coronavirus Map by Countries */}

          <Grid.Column width={3}>
            <WorldContainer />
            <br />
            <CountryContainer />
            <br />
            <TimeLastUpdated />
          </Grid.Column>

          {/* Grid 2 World Map */}

          <Grid.Column width={7} className="grid-two">
            <MapChartContainer />
            <div className="world-map-info">
                <div className="world-map-info-container-div">
              <h1>World Map Information will go here!</h1>
            </div>
            </div>
          </Grid.Column>

          {/* Grid 3 & 4 Recovered / Deaths */}

          <Grid.Column width={3} className="grid-three">
              <DeathReportContainer />
          </Grid.Column>

          <Grid.Column className="grid-four">
              <RecoveryReportContainer />
          </Grid.Column>

          {/* Grid 5 */}

          <Grid.Column className="grid-five">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <div className="inside-grid-five">
              <h1>Graph Data Will Go Here</h1>
            </div>
          </Grid.Column>
          
        </Grid>
      </div>
    )
  }
}

export default App;
