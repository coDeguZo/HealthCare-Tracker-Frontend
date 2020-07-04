import React from 'react'

const World = (props) => {
    const {country, cases} = props.world
    return (
        <div>
            <div className="left-world-container" >
                <h3>Total Confirmed</h3>
                <h2>{cases}</h2>
            </div>
        </div>
    )
}

export default World