import React from 'react';
import { Grid } from 'semantic-ui-react'
import Nav from './components/Nav'
import CountryContainer from './ConfirmedCases/CountryContainer'
import WorldContainer from './ConfirmedCases/WorldContainer'
import TimeLastUpdated from './components/TimeLastUpdated'
import MapChartContainer from './WorldMap/MapChartContainer';

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

          {/* Grid 2 Map */}

          <Grid.Column width={7}>
            <MapChartContainer />
          </Grid.Column>

          {/* Grid 3 */}

          <Grid.Column width={1} className="grid-three">
            <h1>Hello World 2</h1>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App;
