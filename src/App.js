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
    const [mobileView, setMobileView] = useState("Recoveries & Deaths")

    const toggleMobileVersion = () => setToggleMobileVersion(!mobileVersion)

    const toggleMobileView = (event) => {
      // debugger
      setMobileView(event.target.innerText)
    }
    
    return (
      <div className="App">
        {/* <Nav /> */}
        <div className="title">
          <br/>
          <div style={{textAlign: "right", marginTop: "500"}}>
       
            {/* <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              ternary to change what shows below depending on whether using phone or desktop?
              <a onClick={toggleMobileVersion}><li>Mobile</li></a>
              <a onClick={toggleMobileVersion}><li>Desktop</li></a>
            </ul>
          </div>
            </nav> */}
            {/* <div style={{marginBottom: "-70px"}}> */}
              {mobileVersion ? 
              <Button onClick={(event) => toggleMobileVersion(event)}>Desktop Version</Button>
              :
              <Button onClick={toggleMobileVersion}>Mobile Version</Button>
              }
            {/* </div> */}
        </div>
          <h1 style={{fontSize: "60px", textAlign: "center", color: "red"}}>Coronavirus Tracker</h1>
        </div>
        {mobileVersion === true ?   
        // <div clasName="mobile-view-buttons-div"> 
        <div className="mobile-coronavirus-container">
          <div className="mobile-view-buttons-div">
            <button className="mobile-view-individual-button" onClick={toggleMobileView}>Cases</button>
            <button className="mobile-view-individual-button" onClick={toggleMobileView}>Recoveries & Deaths</button>
            <br />
            <button className="mobile-view-individual-button" onClick={toggleMobileView}>Map</button>
            <button className="mobile-view-individual-button" onClick={toggleMobileView}>Graph</button>
            <button className="mobile-view-individual-button" onClick={toggleMobileView}>Other</button>
            <br /><br />
          </div>
        </div>
        : null}
        {/* <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/about" render={() => <About />}/> */}
        {mobileVersion === true && mobileView === "Cases" ? 
        <div style={{padding: "20px", backgroundColor: "#0e1a1f"}}>
          <WorldContainer />
          {/* <br /> */}
          <CountryContainer />
          {/* <br /> */}
          <div style={{marginTop: '-4px'}}>
            <TimeLastUpdated />
          </div>
        </div>
        : 
        mobileVersion === true && mobileView === "Recoveries & Deaths" ? 
        <div style={{padding: "20px", backgroundColor: "#0e1a1f"}}>
            <Grid>
          <div className="mobile-grid-three">
            <div className="mobile-deaths-container">
              <Grid.Column width={4}>
                <DeathReportContainer />
              </Grid.Column>
            </div>
          </div>
          <div className="mobile-grid-four">
            <div className="mobile-recoveries-container">
              <Grid.Column width={6}>
                <RecoveryReportContainer />
              </Grid.Column>
            </div>
          </div>
            </Grid>
        </div>
        : 
        mobileVersion === true && mobileView === "Map" ? 
        <div style={{padding: "20px", backgroundColor: "#0e1a1f"}}>
          <div className="mobile-map-div">
            <MapChartContainer/>
          </div>
          <div className="mobile-map-buttons-div">
            <br /><br /><br /><br />
            <MapChartButtons/>
          </div>
          <br />
        </div>
      : 
      mobileVersion === true && mobileView === "Graph" ? 
      <div>
        <div style={{padding: "20px", backgroundColor: "#0e1a1f"}}>
          <GraphsContainer mobileVersion={mobileVersion}/>
          <br /><br /><br /><br /><br />
        </div>

      </div>
        : 
        mobileVersion === true && mobileView === "Other" ? 
        <div style={{backgroundColor: "#0e1a1f"}}>
          <div className="mobile-countries-data-container-div">
            <div className="country-data-div">
              <div className="country-container-div">
                <div className="country-container-labels-div">
                  <CountriesDataContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        null
        }       
        <Route exact path="/" render={() => 
        mobileVersion === false ? 
        <div className="coronavirus-container">
        <Grid>

          {/* Grid 1 Coronavirus Map by Countries */}

          <Grid.Column width={3} className="grid-one">
            <div className="desktop-confirmed-cases-and-time-div">
              <WorldContainer />
              <br />
              <CountryContainer />
              <br />
              <TimeLastUpdated />
            </div>
          </Grid.Column>

          {/* Grid 2 World Map */}

          <Grid.Column width={5} className="grid-two">
          {/* <div className="map-column"> */}
          <div className="map-chart-container-div">
            <MapChartContainer />
          </div>
            <div className="world-map-info">
                <div className="world-map-info-container-div">
              {/* <h1>World Map Information will go here!</h1> */}
              <MapChartButtons />
            </div>
          </div>
          {/* </div> */}
          </Grid.Column>

          {/* Grid 3 & 4 Recovered / Deaths */}

          <Grid.Column width={3} className="grid-three">
            <div className="desktop-deaths-recoveries-container">
              <div className="desktop-deaths-container">
                <DeathReportContainer />
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column width={3} className="grid-four">
            <div className="desktop-deaths-recoveries-container">
              <div className="desktop-recoveries-container">
                <RecoveryReportContainer />
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
              </div>
            </div>
          </Grid.Column>

          {/* Grid 5 */}

          <Grid.Column className="grid-five">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <div className="inside-grid-five">
              <GraphsContainer mobileVersion={mobileVersion}/>
            </div>
          </Grid.Column>

        </Grid>
        <br />
        <div className="country-data-div">
          <div className="country-container-div">
            <div className="country-container-labels-div">
              <CountriesDataContainer />
              </div>
            </div>
          </div>
        <br />
        </div>
        : null
        }/>
      {/* } */}
        <Footer />
      </div>
    )
  // }
}

export default App;
