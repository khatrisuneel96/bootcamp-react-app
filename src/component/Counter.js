import React, {useState} from 'react'

function Counter(){
    const initialCount = 0
    let [count, setCount] = useState(0)

    const increaseFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increase</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrease</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={increaseFive}>Increase 5</button>
        </div>
    )
}

export default Counter