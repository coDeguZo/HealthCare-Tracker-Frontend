import React from 'react'

function Death(props) {
    const {deaths, country} = props.country
    return (
        <div>
            <p style={{color: "white"}}><span style={{color: "white"}}><strong>{deaths}</strong></span> {country}</p>
        </div>
    )
}

export default Death