import React from 'react'

function Country(props) {
    const {country, cases} = props.country
    return (
        <div>
            <p><span><strong>{cases}</strong></span> {country}</p>
        </div>
    )
}

export default Country;