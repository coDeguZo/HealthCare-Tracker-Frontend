import React, {useState}  from 'react'

const Home = (prop) => {

    const [boolean, setBoolean] = useState({boolean: false})

    const changeBoolean = () => setBoolean({boolean: !boolean.boolean})

    return (
        <div>
            <h1>Home Component</h1>
            {boolean.boolean === true ? 
            <h1>True</h1>
            : 
            <h1>False</h1>
            }           
            <button onClick={changeBoolean}>Switch</button>
        </div>
    )
}
export default Home