import React, {useState} from 'react'

function About(){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    return (
        <div>
            <h1>About Page</h1>
            <h4>{count}</h4>
            <button onClick={increment}>Increment Number</button>
        </div>
    )
}

export default About