import React, {useState} from 'react'

function StepTracker() {
    let [step, setStep] = useState(0)
    function Increment() {
        setStep(prevState => prevState + 1)
    }
    return (
        <div>
        <h3>Today I took {step}</h3>
        <button onClick={Increment}>Took another step</button>
        </div>
    )

}

export default StepTracker