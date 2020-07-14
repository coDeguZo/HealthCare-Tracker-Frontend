import React from 'react'
import { fetchingWorld } from '../redux/actions'
import {connect} from 'react-redux'
import World from './World'

class WorldContainer extends React.Component {

    componentDidMount(){
        this.props.fetchingWorld()
    }

    render(){
        return(
            <div className="ConfirmedCases-div">
                <World key={this.props.world} world={this.props.world}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        world: state.world
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingWorld: () => {dispatch(fetchingWorld())}
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(WorldContainer))