import React from 'react' 
import {Route} from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import CountryContainer from './ConfirmedCases/CountryContainer'
import WorldContainer from './ConfirmedCases/WorldContainer'
import TimeLastUpdated from './components/TimeLastUpdated'
import MapChartContainer from './WorldMap/MapChartContainer'
import DeathReportContainer from './CovidHealth/DeathReportContainer'
import RecoveryReportContainer from './CovidHealth/RecoveryReportContainer'
import GraphsContainer from './Graphs/GraphsContainer'
import CountriesDataContainer from './CountriesData/CountriesDataContainer'
import MapChartButtons from './WorldMap/MapChartButtons'

class App extends React.Component {
  
  render(){

    return (
      <div className="App">
        {/* <Nav /> */}
        <div className="title">
          <h1 style={{fontSize: "60px", textAlign: "center", color: "red"}}>Coronavirus Tracker</h1>
        </div>
        {/* <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/about" render={() => <About />}/> */}
        <Route exact path="/" render={() => 
        <div className="coronavirus-container">
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
          <div className="map-chart-container-div">
            <MapChartContainer />
          </div>
            <div className="world-map-info">
                <div className="world-map-info-container-div">
              {/* <h1>World Map Information will go here!</h1> */}
              <MapChartButtons />
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
              <GraphsContainer />
            </div>
          </Grid.Column>
          
        </Grid>
        <CountriesDataContainer />
        <br />
        </div>
        }/>
        <Footer />
      </div>
    )
  }
}

export default App;
