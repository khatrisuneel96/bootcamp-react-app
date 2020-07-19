import React, {useState} from 'react'
import './App.css'

function Flipping () {
    let [isLight, setLight] = useState(true)
    let [count, setCount] = useState(0)
    let [btn, setBtn] = useState(true)

    const isChanged = isLight ? "light" : "dark"

    const isDay = isLight ? "Morning" : "Night"



    return(
        <div className={`box room ${isChanged}`}>
            <h1>Hi. It's is {isDay}</h1>
            <h3>Clicked : {count}</h3>
            <button onClick={() => (
                setCount(count + 1),setLight(!isLight),setBtn(!btn)
            )}
            >{
                btn ? "Make Night" : "Make Day"
            }</button>
            
        </div>
    )
}

export default Flipping