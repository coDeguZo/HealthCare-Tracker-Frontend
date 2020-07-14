import React from 'react'

function Country(props) {
    const {country, cases} = props.country
    return (
        <div >
            <p style={{color: "white"}}><span style={{color: "red"}}><strong>{cases}</strong></span> {country}</p>
        </div>
    )
}

export default Country;