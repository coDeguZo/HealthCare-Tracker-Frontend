import React from 'react'
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {clickingMapButton} from '../redux/actions'

const MapChartButtons = (props) => {
    return (
        <div>
            {/* <h1 style={{color: "white"}}>Change Map Above To Reflect Button</h1> */}
            <br />
            <Button style={{marginRight: "20px"}} onClick={(event) => props.clickingMapButton(event)}>Cases</Button>
            <Button style={{marginRight: "20px"}} onClick={(event) => props.clickingMapButton(event)}>Deaths</Button>
            <Button onClick={(event) => props.clickingMapButton(event)}>Recovered</Button>
            {/* <button>More buttons?</button> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickingMapButton: (event) => {dispatch(clickingMapButton(event))},
      }
}

export default connect(null, mapDispatchToProps)(MapChartButtons)