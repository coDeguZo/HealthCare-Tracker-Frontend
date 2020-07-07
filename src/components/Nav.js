import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return(
        <div> 
            <div className="topnav">
                <Link to="/">Health Line Tracker</Link>
                <div className="topnav-right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/coronavirus">Covid-19 Info</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav