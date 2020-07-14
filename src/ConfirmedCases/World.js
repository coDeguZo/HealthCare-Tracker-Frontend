import React from 'react'

const World = (props) => {
    const {country, cases} = props.world
    return (
        <div>
            <div className="left-world-container" >
                <h3 style={{color: "white"}}>Total Confirmed</h3>
                <h2 style={{color: "red"}}>{cases}</h2>
            </div>
        </div>
    )
}

export default World