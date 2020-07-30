import React, {useState} from 'react'

function Theme() {

    let [theme, setTheme] = useState("red")

    return(
        <div>
            <h1 style={{ color: `${theme}` }} >{theme}</h1>
            <button onClick={() => setTheme(theme==="red" ? "blue": "red")}>Change Theme</button>
        </div>
    )
}

export default Theme