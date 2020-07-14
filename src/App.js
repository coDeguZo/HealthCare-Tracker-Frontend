import React, {useState} from 'react' 
import {Route} from 'react-router-dom'
import { Grid, Segment, Button } from 'semantic-ui-react'
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

// class App extends React.Component {
const App = () => {
  // render(){
    const [mobileVersion, setToggleMobileVersion] = useState(false)
    const [mobileView, setMobileView] = useState("Total Cases")

    const toggleMobileVersion = () => setToggleMobileVersion(!mobileVersion)

    const toggleMobileView = (event) => {
      debugger
      setMobileView(event.target.innerText)
    }
//     <div className="some-container">
    // {
    //    (() => {
    //        if (conditionOne)
    //           return <span>One</span>
    //        if (conditionTwo)
    //           return <span>Two</span>
    //        else (conditionOne)
    //           return <span>Three</span>
    //    })()
    // }
    // </div>

    // this.state.route === 'projects'
    // ? 
    // <div> <Navigation onRouteChange={this.onRouteChange}/> Projects</div>
    // :
    // this.state.route === 'about'
    // ?
    // <div> <Navigation onRouteChange={this.onRouteChange}/> About</div>
    // :
    // this.state.route === 'contact'
    // ?
    // <div> <Navigation onRouteChange={this.onRouteChange}/> Contact</div>
    // :
    // <p> default </p>
    
    return (
      <div className="App">
        {/* <Nav /> */}
        <div className="title">
          <br/>
          <div style={{textAlign: "right", marginTop: "500"}}>
            {mobileVersion === false ? 
            <Button onClick={(event) => toggleMobileVersion(event)}>Mobile Version</Button>
            :
            <Button onClick={toggleMobileVersion}>Desktop Version</Button>
            }
          </div>
          <h1 style={{fontSize: "60px", textAlign: "center", color: "red"}}>Coronavirus Tracker</h1>
        </div>
        {/* <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/about" render={() => <About />}/> */}
        {mobileVersion === true ? 
        <div>
          <WorldContainer />
          <br />
          <CountryContainer />
          <br />
          <TimeLastUpdated />
          <br />
          <Button onClick={toggleMobileView}>Total Cases</Button>
          <Button>Recoveries & Deaths</Button>
          <Button>Graph</Button>
          <Button>Other</Button>
          <br /><br />
        </div>
        : 
        <Route exact path="/" render={() => 
        <div className="coronavirus-container">
        <Grid>

          {/* Grid 1 Coronavirus Map by Countries */}

          <Grid.Column width={3} className="grid-one">
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

          <Grid.Column width={3} className="grid-four">
              <RecoveryReportContainer />
          </Grid.Column>

          {/* Grid 5 */}

          <Grid.Column className="grid-five">
            {/* <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> */}
            <div className="inside-grid-five">
              <GraphsContainer />
            </div>
          </Grid.Column>
          
        </Grid>
        <CountriesDataContainer />
        <br />
        </div>
        }/>
      }
        <Footer />
      </div>
    )
  // }
}

export default App;
