import React from 'react'

function Recoveries(props) {
    const {recovered, country} = props.country
    return (
        <div>
            <p style={{color: "white"}}><span style={{color: "green"}}><strong>{recovered === null ? "No Data" : recovered}</strong></span> {country}</p>
        </div>
    )
}

export default Recoveries