import React, {useState, useEffect} from 'react'
import Canvas from "react-canvas-js"
import Graph from './Graph'

function GraphsContainer(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',{
        headers: {
            'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com', 
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
        })
        .then(resp => resp.json())
        .then(data => {
            setData(data)
        })
    }, [])

    return (
        <div>
            <Graph data={data}/>
        </div>
    )
}

export default GraphsContainer