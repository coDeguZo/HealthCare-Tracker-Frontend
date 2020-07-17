import React from 'react'

const TimeLastUpdated = () => {
    const time = Date.now()
    const date = new Date(time)
    console.log(date)
    const withoutEnd = date.toString().split("").splice(0,28).join("")
    return(
        <div className="wrapper-date-time-left">
            {/* <div className="date-time-left"> */}
            <div>
                <bbr />
                {/* <h4>Last Updated at(M/D/YYYY)</h4> */}
                <h5 style={{color: "white"}}>{withoutEnd}</h5>
            </div>
        </div>
    )
}




export default TimeLastUpdated