import React from 'react'
import {connect} from 'react-redux'
import {clickingMapButton} from '../redux/actions'

const MapChartButtons = (props) => {
    return (
        <div>
            <h1>Buttons</h1>
            <button onClick={(event) => props.clickingMapButton(event)}>Cases</button>
            <button onClick={(event) => props.clickingMapButton(event)}>Deaths</button>
            <button onClick={(event) => props.clickingMapButton(event)}>Recovered</button>
            <button>More buttons?</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickingMapButton: (event) => {dispatch(clickingMapButton(event))},
      }
}

export default connect(null, mapDispatchToProps)(MapChartButtons)